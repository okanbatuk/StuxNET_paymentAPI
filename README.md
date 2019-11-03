# StuxNET_paymentAPI

http://localhost:3001/payment -> POST
===================

REQ
```json
{
	"subsID":10011
}
```

RES
```json
{
    "BillID": 32,
    "SubsNumber": "10011",
    "Customer": "JO**** WI****",
    "Debt": 34.7,
    "Type": "Natural Gas",
    "Term": "October  2019"
}
```

http://localhost:3001/pay -> POST
=====================

REQ
```json
{
	"billID":32,
	"accNo": 10000000,
	"additNo":1001
}
```

RES
```json
{
    "Status": 1
}
```