import { getCategoriesCollection } from './db'
import { Topping, ToppingWithCategoryId } from './topping'

export default async function expandToppingsCategories(
  toppings: ToppingWithCategoryId[]
): Promise<Topping[]>
{
  const categoriesCollection = await getCategoriesCollection()
  const categoriesCache: Record<number, string> = {}
  return Promise.all(toppings.map(async topping => {
    if (!(topping.category in categoriesCache)) {
      const category = await categoriesCollection.findOne({id: topping.category})
      if (category === null) {
        throw new Error('Topping category doesn\'t exist')
      }
      categoriesCache[topping.category] = category.name
    }
    return {...topping, category: categoriesCache[topping.category]}
  }))
}
