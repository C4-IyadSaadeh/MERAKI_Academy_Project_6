const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());

const PORT = 5000;
//====================================================//import database
const connection = require("./database/db");

//====================================================// Import Routers
const AdminRouter = require("./routes/Admin");
const MovieRouter = require("./routes/Movie");
const GenreRouter = require("./routes/Genre");
const RoleRouter = require("./routes/Role");
const SubscriptionRouter = require("./routes/Subscription");
const UserRouter = require("./routes/User");

//====================================================// Routes Middleware
app.use("/admin", AdminRouter);
app.use("/movie", MovieRouter);
app.use("/Genre", GenreRouter);
app.use("/role", RoleRouter);
app.use("/subscription", SubscriptionRouter);
app.use("/user", UserRouter);

//====================================================// Handles any other endpoints [unassigned - endpoints]
// app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
