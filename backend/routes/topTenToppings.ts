import { Request, Response } from 'express'
import { getToppingsCollection } from '../db'
import expandToppingsCategories from '../expandToppingsCategories'
import { Topping, ToppingWithCategoryId } from '../topping'
import { SuccessResponse } from '../response'

export default async function topTenToppings(
  _: Request, response: Response<SuccessResponse<Topping[]>>)
{
  const toppingsCollection = await getToppingsCollection()
  const rawToppings =
    await toppingsCollection
      .find<ToppingWithCategoryId>({})
      .sort( { "winRatio": -1 } )
      .limit(10)
      .toArray()
  const expandedToppings = await expandToppingsCategories(rawToppings)
  response.json({message: "Successfully retrieved toppings",
                 data: expandedToppings})
}
