const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const schoolRoutes = require("./routes/school");
const teacherRoutes = require("./routes/teacher");
const studentRoutes = require("./routes/student");
const parentRoutes = require("./routes/parent");
const classRoutes = require("./routes/class");

//app
const app = express();

//db
mongoose
  .connect(process.env.CLOUD_DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes middleware
app.use("/api", schoolRoutes);
app.use("/api", teacherRoutes);
app.use("/api", studentRoutes);
app.use("/api", parentRoutes);
app.use("/api", classRoutes);

//port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
