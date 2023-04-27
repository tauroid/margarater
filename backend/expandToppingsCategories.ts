import { getCategoriesCollection } from './db'
import { Topping, ToppingWithCategoryId } from './topping'

export default async function expandToppingsCategories(
  toppings: ToppingWithCategoryId[]
): Promise<Topping[]>
{
  const categoriesCollection = await getCategoriesCollection()
  const categoriesCache: Record<number, string> = {}

  async function getCategoryName(categoryId: number) {
     if (!(categoryId in categoriesCache)) {
      const category = await categoriesCollection.findOne({id: categoryId})
      if (category === null) {
        throw new Error('Topping category doesn\'t exist')
      }
      categoriesCache[categoryId] = category.name
    }
    return categoriesCache[categoryId]
  }

  return Promise.all(
    toppings.map(
      async topping => ({
        ...topping,
        category: await getCategoryName(topping.category)
      })
    )
  )
}
