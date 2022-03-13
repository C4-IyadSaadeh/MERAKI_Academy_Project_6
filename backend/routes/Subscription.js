const express = require("express");
const SubscriptionRouter = express.Router();
const {
  CreateNewSubscription,
  getAllSubscription,
  updateSubscriptionById,
  deleteSubscriptionById,
  getSubscriptionById,
  updateSubscriptionReNew,
} = require("../controllers/Subscription");

SubscriptionRouter.post("/createSubscription", CreateNewSubscription);
SubscriptionRouter.get("/all", getAllSubscription);
SubscriptionRouter.get("/getSubscriptionById", getSubscriptionById);
SubscriptionRouter.put("/updateSubscriptionReNew", updateSubscriptionReNew);
SubscriptionRouter.put("/updateSubscriptionById", updateSubscriptionById);
SubscriptionRouter.delete("/deleteSubscriptionById", deleteSubscriptionById);
module.exports = SubscriptionRouter;
