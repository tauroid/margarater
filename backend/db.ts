import { MongoClient } from 'mongodb'

const url = 'mongodb://root:password@localhost:27017'

export async function getCategoriesCollection() {
  const connection = await MongoClient.connect(url)
  return connection.db('pizzaToppings').collection('categories')
}

export async function getToppingsCollection() {
  const connection = await MongoClient.connect(url)
  return connection.db('pizzaToppings').collection('toppings')
}
