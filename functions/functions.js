


module.exports = {
    // this function tells about the array is empty or not
    lengtOfArry: (param) => {
        if (param.length !== 0) {
            return param
        } else return ({ "message": "no users found" })
    },

    // this function calculates number of days between two dates

    numberOfDays: (param2) => {
        let entryDate = new Date(new Date().toISOString().split('T')[0])
        let exitDate = new Date(param2.toISOString().split('T')[0])
        let diffrenceTime = exitDate.getTime() - entryDate.getTime()
        let days = Math.ceil(diffrenceTime / (1000 * 3600 * 24));

        return days
    },

    // this function help to some the array of values

    sumeOfArray: (param) => {
        if (param.length !== 0) {
            let sum = param.reduce((param1, param2) => { return param1 + param2 })
            return ({ "totalAmount": sum })
        } else return ("no users found")

    },

    // this function add months delay to your date
     dateWithMonthsDelay : (months) => {  
        const date = new Date()
        date.setMonth(date.getMonth() + months)
      
        return date
      }

}