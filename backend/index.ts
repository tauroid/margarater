import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const port = 3000


app.get('/', function (request, response) {
  response.send('helloooo)')
})

app.listen(port)
