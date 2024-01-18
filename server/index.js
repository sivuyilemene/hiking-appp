const express = require('express');
const app = express();
const port = 8080;

app.get('/api/home', (req, res) => {
    res.json({message: 'Get request!'})
  });



app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})