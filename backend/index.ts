import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const port = 4000


app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/', function (request, response) {
  response.send('helloooo)')
})

app.listen(port)
