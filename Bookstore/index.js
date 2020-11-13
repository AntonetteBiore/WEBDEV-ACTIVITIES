const express = require("express")
const app = express()
const PORT = 9600;
const BodyParser = require("body-parser")
const mongoConnect = require("./services/database")
const BookRouter = require("./routes/bookRoutes")

//connect to mongodb
mongoConnect();
app.use(BodyParser.urlencoded({
    extended: true
}))
app.use(express.json())

app.use("/api/bookstore", BookRouter);

app.listen(PORT, ()=> console.log(`listening in port ${PORT}`));
