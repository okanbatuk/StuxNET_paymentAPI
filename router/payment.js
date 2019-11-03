const express = require('express');
const router = express.Router();
const paymentTransactions = require('../Database/query/paymentTransactions');

/* router.post('/payment', async (req,res) => {
    const payment = await paymentTransactions.payments(req.body);
    if (payment.recordset[0].Status != 0) {
        res.json(payment.recordsets[0]);
    } else {
        res.json({ status:404, message:"Not Found Payment"});
    }
}) */

router.post('/', async (req, res) => {
    const account = await paymentTransactions.accounts(req.body)
    if (account.recordset[0].Status != 0) {
        res.json(account.recordsets[0]);
    } else {
      res.json({ status: 404, message: "Not found account!" });    
    }
})

module.exports = router;