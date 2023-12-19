const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://akshaydobariya04:akshay7775@cluster0.dsdoamh.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
