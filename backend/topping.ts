import { ObjectId } from 'mongodb'

export type Topping = {
  _id: ObjectId,
  name: string,
  category: string,
  img: string
  numberOfMatches?: number
  numberOfWins?: number
  winRatio?: number
}

export type ToppingWithCategoryId = Omit<Topping,'category'> & {
  category: number
}
