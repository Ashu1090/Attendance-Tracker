const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
require("dotenv").config();

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
// Middleware
app.use(express.json());

app.use("/api/auth", authRoutes);

sequelize.sync().then(() => console.log("Database connected"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
