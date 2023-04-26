import { ObjectId } from 'mongodb'

export type Topping = {
  _id: ObjectId,
  name: string,
  category: string,
  img: string
}

export type ToppingWithCategoryId = Omit<Topping,'category'> & {
  category: number
}
