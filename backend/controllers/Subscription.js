// Connection to database server.
const connection = require("../database/db");

// This Function Add New Subscription 
const CreateNewSubscription = (req, res) => {
  const {title,price,quality,watch} = req.body;
  const query = "INSERT INTO Subscription (title,price,quality,watch) VALUES (?,?,?,?)";
  const data = [title,price,quality,watch];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(200)
      .json({ success: true, message: "SuccessFully Add New Subscription" });
  });
};

// Retrieve All Subscriptions
const getAllSubscription = (req, res) => {
  const query = "SELECT * FROM Subscription WHERE is_deleted=0";
  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "SuccessFully Retrieve All Subscription",
        Subscription: result,
      });
  });
};

// Retrieve Single Subscriptions
const getSubscriptionById = (req, res) => {
    const query = "SELECT * FROM Subscription WHERE is_deleted=0 and id=?";
    const data=[req.body.id]
    connection.query(query,data, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "server Error", error: err.message });
      }
      return res
        .status(200)
        .json({
          success: true,
          message: "SuccessFully Retrieve  Subscription",
          Subscription: result,
        });
    });
  };

// Update Subscription By Id 
const updateSubscriptionById = (req, res) => {
  const { id, title,price,quality,watch} = req.body;
  const query = "UPDATE Subscription SET title=?,price=?,quality=?,watch=?where id =?";
  const data = [id, title,price,quality,watch];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Update Subscription" });
  });
};
// To Renew Subscriptions
const updateSubscriptionReNew = (req, res) => {
    const { id, updated_at} = req.body;
    const query = "UPDATE Subscription SET updated_at=? where id =?";
    const data = [id,updated_at];
    connection.query(query, data, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "server Error", error: err.message });
      }
      return res
        .status(202)
        .json({ success: true, message: "SuccessFully Update Subscription" });
    });
  }; 

//Delete Subscription By ID If user not Subscription in next month i will delete the subscription
const deleteSubscriptionById = (req, res) => {
  const { id } = req.body;
  const query = "UPDATE Subscription SET is_deleted=1 where id =?";
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Delete Subscription" });
  });
  module.exports = {
    CreateNewSubscription,
    getAllSubscription,
    updateSubscriptionById,
    deleteSubscriptionById,
    getSubscriptionById,
updateSubscriptionReNew
  };
};
