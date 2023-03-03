const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

require("dotenv").config();
const app = express();

app.engine(
  ".hbs",
  engine({ extname: ".hbs", defaultLayout: false, layoutsDir: "views" })
);
app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

const connectDB = require("./DB_CONNECTIONS/Dbconnection");
const userRouter = require("./routers/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", userRouter);
app.listen(process.env.port, () => {
  console.log("listening port " + process.env.port);
});
console.log(__dirname);
connectDB();
