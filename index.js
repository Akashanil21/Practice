const express = require("express");
const path = require("path")

const app = express();

const userRouter = require("./routes/usersRouter");
const router = require("./routes/homeRouter");
const authRouter = require("./routes/authRouter");

// view engine setup

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/users", userRouter);
app.use("/api/auth",authRouter)
app.use("/", router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
