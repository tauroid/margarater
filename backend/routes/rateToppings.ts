import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { getToppingsCollection } from '../db'
import { ToppingWithCategoryId } from '../topping'

const updateNumberOfMatches = (topping: ToppingWithCategoryId): number => {
    return topping.numberOfMatches !== undefined ? topping.numberOfMatches + 1 : 1
}

const updateNumberOfWins = (topping: ToppingWithCategoryId): number => {
    return topping.numberOfWins !== undefined ? topping.numberOfWins + 1 : 1
}

const updateWinRatio = (topping: ToppingWithCategoryId): number => {
     if (topping.numberOfWins !== undefined && topping.numberOfMatches !== undefined) {
         const winRatio: number = topping.numberOfWins / topping.numberOfMatches
         return winRatio
     } else {
         throw new Error ("Couldn't calculate the winRatio ; numberOfMatches and/or number ofWins might be undefined")
     }
}


const rateToppings = async (request: Request, response: Response) => {
    try {
        const losingToppingId: ObjectId = new ObjectId(request.body.losingToppingId)
        const winningToppingId: ObjectId = new ObjectId(request.body.winningToppingId)

        const toppingsCollection = await getToppingsCollection()
        const winningTopping = await toppingsCollection.findOne({ _id: winningToppingId }) as ToppingWithCategoryId
        const losingTopping = await toppingsCollection.findOne({ _id: losingToppingId }) as ToppingWithCategoryId

        winningTopping.numberOfMatches = updateNumberOfMatches(winningTopping)      
        losingTopping.numberOfMatches = updateNumberOfMatches(losingTopping)
        
        winningTopping.numberOfWins = updateNumberOfWins(winningTopping)
       
        if(losingTopping.numberOfWins === undefined) {
            losingTopping.numberOfWins = 0
        }

        winningTopping.winRatio = updateWinRatio(winningTopping)
        losingTopping.winRatio = updateWinRatio(losingTopping)     

        await toppingsCollection.updateOne({ _id: winningToppingId }, { $set:
             { "numberOfMatches":  winningTopping.numberOfMatches, 
               "numberOfWins": winningTopping.numberOfWins,
                "winRatio": winningTopping.winRatio 
            } 
        })

        await toppingsCollection.updateOne({ _id: losingToppingId }, { $set:
            { "numberOfMatches":  losingTopping.numberOfMatches, 
              "numberOfWins": losingTopping.numberOfWins,
               "winRatio": losingTopping.winRatio 
           } 
       })

        response.status(200).json({ "message": "Successfully updated the database", "data": [] })
    } catch (Exception) {
        response.status(500).json({ "message": "Couldn't update the database", "data": [] })
    }
}

export default rateToppings