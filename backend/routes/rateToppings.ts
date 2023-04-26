import {Request, Response} from 'express'
import { Collection, ObjectId } from 'mongodb'
import { getToppingsCollection } from '../db'

// interface Topping {
//     _id: string
//     name: string
//     category: string
//     img: string
//     numberOfMatches?: number
//     numberOfWins?: number
//     winRation?: number
// }

const updateNumberOfMatches = async (topping: Collection<Document>) =>  {
    if(topping.numberOfMatches)
} 


const rateToppings = async (request: Request, response: Response) => {
    
    const losingToppingId: ObjectId = new ObjectId(request.body.losingToppingId)
    const winningToppingId: ObjectId = new ObjectId(request.body.winningToppingId)

    const toppingsCollection = await getToppingsCollection()
    const winningTopping = await toppingsCollection.findOne({_id: winningToppingId})   
    const losingTopping = await toppingsCollection.findOne({_id: losingToppingId})

    response.json(winningTopping)    
    // update numberOfMatches for both toppings
    // update numberOfWins for the winning topping
    // update winRatio for both
    // send confirmation message 
}

export default rateToppings