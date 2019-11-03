const express = require('express');
const payment = require('./router/payment');
const bodyParser = require("body-parser");
const port = process.env.PORT||3001
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/', payment);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});