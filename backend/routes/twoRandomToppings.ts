import { Request, Response } from 'express'
import expandToppingsCategories from '../expandToppingsCategories'
import { getToppingsCollection } from '../db'
import { ToppingWithCategoryId } from '../topping'

export default async function twoRandomToppings(
  request: Request, response: Response
) {
  const exclude = request.query.exclude as (string | null)

  const toppingsCollection = await getToppingsCollection()
  let toppings = null

  while (
    !toppings ||
      (exclude && toppings.some(topping =>
        exclude.split(',').some((id: string) =>
          id === topping._id.toString())))
  ) {
    toppings = await toppingsCollection
      .aggregate([{$sample: {size: 2}}])
      .toArray() as ToppingWithCategoryId[]
  }

  response.json({message: "Successfully retrieved toppings",
                 data: await expandToppingsCategories(toppings)})
}
