import { Request, Response } from 'express'
import { Collection, ObjectId } from 'mongodb'
import { getToppingsCollection } from '../db'
import { Topping, ToppingWithCategoryId } from '../topping'

const updateNumberOfMatches = (topping: ToppingWithCategoryId): number => {
    return topping.numberOfMatches ? topping.numberOfMatches + 1 : 1
}

const updateNumberOfWins = (topping: ToppingWithCategoryId): number => {
    return topping.numberOfWins ? topping.numberOfWins + 1 : 1
}

const updateWinRatio = (topping: ToppingWithCategoryId): number => {
    let winRatio = 0
    if (topping.numberOfWins && topping.numberOfMatches) {
        winRatio = topping.numberOfWins / topping.numberOfMatches
    }
    return winRatio
}


const rateToppings = async (request: Request, response: Response) => {
    try {
        const losingToppingId: ObjectId = new ObjectId(request.body.losingToppingId)
        const winningToppingId: ObjectId = new ObjectId(request.body.winningToppingId)

        const toppingsCollection = await getToppingsCollection()
        const winningTopping = await toppingsCollection.findOne({ _id: winningToppingId }) as ToppingWithCategoryId
        const losingTopping = await toppingsCollection.findOne({ _id: losingToppingId }) as ToppingWithCategoryId

        await toppingsCollection.updateOne({ _id: winningToppingId }, { $set: updateNumberOfMatches(winningTopping) })
        await toppingsCollection.updateOne({ _id: losingToppingId }, { $set: updateNumberOfMatches(losingTopping) })

        await toppingsCollection.updateOne({ _id: winningToppingId }, { $set: updateNumberOfWins(winningTopping) })

        await toppingsCollection.updateOne({ _id: winningToppingId }, { $set: updateWinRatio(winningTopping) })
        await toppingsCollection.updateOne({ _id: losingToppingId }, { $set: updateWinRatio(losingTopping) })

        response.status(200).json({ "message": "Successfully updated the database", "data": [] })
    } catch (Exception) {
        response.status(500).json({ "message": "Couldn't update the database", "data": [] })
    }
    // send confirmation message 
}

export default rateToppings