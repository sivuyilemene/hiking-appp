import  getHikes  from "./functions/getHikes.js";
import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors())
const port = 8888;

app.get('/hikes', (req, res) => {
    const result = Promise.resolve(getHikes())
    result.then(value => {
      res.json({hikes: value.body})
    })
  });



app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})