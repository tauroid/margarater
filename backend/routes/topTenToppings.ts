import { Request, Response } from 'express'
import { getToppingsCollection } from '../db'
import { Topping, ToppingWithCategoryId } from '../topping'
import { SuccessResponse } from '../response'
import replaceToppingCategoryIdsWithNames from '../replaceToppingCategoryIdsWithNames'

export default async function topTenToppings(
  _: Request, response: Response<SuccessResponse<Topping[]>>)
{
  const toppingsCollection = await getToppingsCollection()
  const toppings =
    await toppingsCollection
      .find<ToppingWithCategoryId>({})
      .sort( { "winRatio": -1 } )
      .limit(10)
      .toArray()
  response.json({message: "Successfully retrieved toppings",
                 data: await replaceToppingCategoryIdsWithNames(toppings)})
}
