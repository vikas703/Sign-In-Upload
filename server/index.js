require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const fileRoute = require("./routes/file");

//db
connection();

//mw
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use(fileRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on ${port}..`);
});
