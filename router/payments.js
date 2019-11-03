const express = require('express');
const router = express.Router();
const paymentTransaction = require("../Database/query/paymentTransaction");


router.post('/payment', async (req,res) => {
    const payment = await paymentTransaction.payments(req.body);
    if (payment.recordset[0].Status != 0) {
        res.json(payment.recordsets[0]);
    } else {
        res.json({ status:404, message:"Not Found Payment"});
    }
})

router.post('/pay', async (req,res) => {
    const pay = await paymentTransaction.pay(req.body);
    if (pay.recordset[0].Status != 0) {
        res.json(pay.recordsets[0]);
    } else {
        res.json({ status:500, message:"Insuficcient Balance !!" });
    }
})

module.exports = router;