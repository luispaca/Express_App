//************************ REQUIRE'S *******************************//
const express = require("express");
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const cors = require("cors");
//****************** EXPRESS() ************************//
const app = express();


//******************************** MIDDLEWARES *************************************//
app.use(express.static(path.join(__dirname,"../public")));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("__method"));
app.use(
    session({secret: "I Have Nothing", resave: false, saveUninitialized: false})
);
app.use(cors());
//************************** TEMPLATES ENGINE *****************************//
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));

//********************* ROUTE SYSTEM REQUIRE AND USE() *****************************//
const mainRouter = require("./routes/main-router");
app.use("/",mainRouter);

//************ CATCH 404 AND FORWARD TO ERROR HANDLER ******************//
app.use((req,res,next) => next(createError(404)));

//********************* ERROR HANDLER *****************************//

//********************* EXPORT APP *****************************//
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on the port ${PORT}`);
});