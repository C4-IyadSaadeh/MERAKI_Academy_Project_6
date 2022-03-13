const express = require("express");
const RoleRouter = express.Router();
const {
  CreateNewRole,
  getAllRole,
  updateRoleById,
  deleteRoleById,
} = require("../controllers/Role");

RoleRouter.post("/createRole", CreateNewRole);
RoleRouter.get("/all", getAllRole);
RoleRouter.put("/updateRoleById", updateRoleById);
RoleRouter.delete("/deleteRoleById", deleteRoleById);
module.exports = RoleRouter;
