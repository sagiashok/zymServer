

const express = require('express')
const app = express();
const userRouter = express.Router();
const path = require('path')
const userData = require('../Schemas/Models')
const fun = require('../functions/functions')




//Home page
userRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'staticFiles', 'index.html'))
});

// Post Metod


userRouter.post('/post', async (req, res) => {
    
    var RequestArray = req.body
    var MapToData =  RequestArray.map((value,index)=>{
       
        const DevoteesData = new userData ({
            userName: value.userName,
            userFatherName: value.userFatherName,
            userPhoneNumber: value.userPhoneNumber,
            userEmailId: value.userEmailId,
            userAge: value.userAge,
            exitDate: value.exitDate,
            paidAmount: value.paidAmount,
            userPackage: value.userPackage
            })
    
            DevoteesData.save()
    
       
    })

    
    await res.status(200).render('layout')

    /*var DevoteesData = new userData({
        userName: req.body.userName,
        userFatherName: req.body.userFatherName,
        userPhoneNumber: req.body.userPhoneNumber,
        userEmailId: req.body.userEmailId,
        userAge: req.body.userAge,
        exitDate: req.body.exitDate,
        paidAmount: req.body.paidAmount,
        userPackage: req.body.userPackage

    })

    await DevoteesData.save()
    res.status(200).render('layout')*/

})

//GET METHOD  Fetch all the data from DB

userRouter.get('/filter', (req, res) => {
    userData.find().then((result) => {
        res.send(fun.lengtOfArry(result))
    }).catch((err) => { console.log(err) })

})

// Dlete Method  

userRouter.delete('/delete', (req, res) => {
    userData.deleteMany({}).then(res.send({ "message": "Data delete from devotees collection" }))
})


// Number Of Days Between Two Dates single user

userRouter.get('/days', (req, res) => {
    userData.find({ "userPhoneNumber": req.query.mobileNumber }).then((result) => {
        const filterData = result
        let days = fun.numberOfDays(filterData[0].exitDate)
        res.send({ "remainingDays": days })
    })
})



// number of days between all users

userRouter.get('/EveryUserRD', (req, res) => {

    userData.find().then((result) => {
        let filterData = result.map((value) => ({ "numberOfDays": fun.numberOfDays(value.exitDate), "userName": value.userName }))

        res.send(filterData)

    })

})

// total amount from all the users

userRouter.get('/totalAmount', (req, res) => {

    userData.find().then((result) => {
        let filterData = result.map((value) => (value.paidAmount))
        res.send(fun.sumeOfArray(filterData))

    })

})

// total amount based on month

userRouter.get("/totalAmountByMonth", (req, res) => {
    userData.find({ "$expr": { "$eq": [{ "$month": "$entryDate" }, req.query.Month] } }).then((result) => {
        let filterData = result.map((value) => (value.paidAmount))
        res.send(fun.sumeOfArray(filterData))
    }


    )

})

//the users who have below nuberof days five

userRouter.get('/usersBelowFiveDays', (req, res) => {

    userData.find().then((result) => {
        let filterData = result.map((value) => ({ "numberOfDays": fun.numberOfDays(value.exitDate), "userName": value.userName }))
        let usersBelowFiveDays = filterData.filter((value) => (value.numberOfDays <= req.query.belowDays))

        console.log(usersBelowFiveDays.length)



        res.send(fun.lengtOfArry(usersBelowFiveDays))

    })

})

// put method  helps to update enitre object

userRouter.put('/update', (Req, res) => {

})

module.exports = userRouter






