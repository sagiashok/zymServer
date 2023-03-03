const mongoose = require('mongoose')





// connection for mongodb
const connectDB = async () => {
       try{
            await mongoose.connect(process.env.DbUrl,{
            });
           console.log('db conneted')
           }catch(err){
             throw err
        }
}
mongoose.set('strictQuery', true)
module.exports = connectDB

