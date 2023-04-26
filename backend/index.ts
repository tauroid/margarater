import express from 'express'
<<<<<<< Updated upstream
import { MongoClient } from 'mongodb'
=======

import twoRandomToppings from './routes/twoRandomToppings'
import topTenToppings from './routes/topTenToppings'
>>>>>>> Stashed changes

const app = express()
const port = 4000

<<<<<<< Updated upstream

app.get('/', function (request, response) {
  response.send('helloooo)')
})
=======
app.get('/twoRandomToppings', twoRandomToppings)
app.get('/topTenToppings', topTenToppings)
>>>>>>> Stashed changes

app.listen(port)
