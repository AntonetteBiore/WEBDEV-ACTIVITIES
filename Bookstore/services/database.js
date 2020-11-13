const mongoose = require("mongoose")
const dburi = "mongodb://localhost/bookstore";

const mongoConnect = ()=>{
    mongoose.connect(dburi, {
        useNewUrlParser:true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true     
    }).then(()=> console.log("connected to mongodb"))
     .catch((e)=>console.log("Error",e));
}

module.exports = mongoConnect;
