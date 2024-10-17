const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
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

// Routes
app.use("/execute", require("./routes/execute"));
app.use("/auth", require("./routes/auth"));
app.use("/forgot-password", require("./routes/forgotPasswordRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
