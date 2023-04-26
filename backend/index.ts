import express from 'express'

import twoRandomToppings from './routes/twoRandomToppings'
import  rateToppings from './routes/rateToppings'
const app = express()
const port = 4000

app.use(express.json())

app.get('/twoRandomToppings', twoRandomToppings)
app.post('/rateToppings', rateToppings)
app.listen(port)
