import { Request, Response } from 'express'
import expandToppingsCategories from '../expandToppingsCategories'
import { getToppingsCollection } from '../db'
import { SuccessResponse } from '../response'
import { Topping, ToppingWithCategoryId } from '../topping'

type TwoRandomToppingsResponse = SuccessResponse<[Topping,Topping]>

export default async function twoRandomToppings(
  request: Request, response: Response<TwoRandomToppingsResponse>
) {
  const exclude = request.query.exclude as (string | null)

  const toppingsCollection = await getToppingsCollection()
  let toppings: null | [ToppingWithCategoryId,ToppingWithCategoryId] = null

  const forbiddenToppings =
    (toppings: ToppingWithCategoryId[]) => (
      exclude &&
        toppings.some(topping =>
          exclude === topping._id.toString())
    )

  while (!toppings || forbiddenToppings(toppings)) {
    toppings = await toppingsCollection
      .aggregate([{$sample: {size: 2}}])
      .toArray() as [ToppingWithCategoryId, ToppingWithCategoryId]
  }

  response.json({message: "Successfully retrieved toppings",
                 data: (await expandToppingsCategories(toppings)
                       ) as [Topping, Topping]})
}
