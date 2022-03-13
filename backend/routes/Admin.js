const express = require("express");
const AdminRouter = express.Router();
const {
  CreateNewAdmin,
  getAllAdmin,
  updateAdminById,
  deleteAdminById,
} = require("../controllers/Admin");
const { loginAdmin } = require("../controllers/Login");
AdminRouter.post("/createAdmin", CreateNewAdmin);
AdminRouter.post("/loginAdmin", loginAdmin);
AdminRouter.get("/all", getAllAdmin);
AdminRouter.put("/updateAdminById", updateAdminById);
AdminRouter.delete("/deleteAdminById", deleteAdminById);
module.exports = AdminRouter;
