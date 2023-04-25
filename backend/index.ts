import express from 'express'

import twoRandomToppings from './routes/twoRandomToppings'

const app = express()
const port = 4000


app.get('/twoRandomToppings', twoRandomToppings)

app.listen(port)
