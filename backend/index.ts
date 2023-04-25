import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const port = 4000


app.get('/', function (request, response) {
  response.send('helloooo)')
})

app.listen(port)
