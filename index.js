const express = require('express')
const bodyParser = require("body-parser");
const payment = require('./router/payments');

const port = process.env.PORT||3001
var cors = require('cors');
const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/pay', payment);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})