import express from 'express'
import twoRandomToppings from './routes/twoRandomToppings'
import topTenToppings from './routes/topTenToppings'
import rateToppings from './routes/rateToppings'
const app = express()
const port = 4000

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/twoRandomToppings', twoRandomToppings)
app.post('/rateToppings', rateToppings)
app.get('/topTenToppings', topTenToppings)

app.listen(port)
