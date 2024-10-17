const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { PythonShell } = require("python-shell");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://fa21bsse0031:sidra27169430031@sidra.gag9gix.mongodb.net/OnlineCodeEditor",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// User schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiration: Date
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

app.use("/auth", require("./routes/auth"));
app.use("/execute", require("./routes/execute"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
