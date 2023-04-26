import express from 'express'

import twoRandomToppings from './routes/twoRandomToppings'
import topTenToppings from './routes/topTenToppings'

const app = express()
const port = 4000

app.get('/twoRandomToppings', twoRandomToppings)
app.get('/topTenToppings', topTenToppings)

app.listen(port)
