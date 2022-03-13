// Connection to database server.
const connection = require("../database/db");

// This Function Add New User
const CreateNewUser = (req, res) => {
  const { email, password, plan, role } = req.body;
  const query = "INSERT INTO User (email,password,plan,role) VALUES (?,?,?,?)";
  const data = [email, password, plan, role];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(200)
      .json({ success: true, message: "SuccessFully Add New User" });
  });
};

// Retrieve All Users
const getAllUser = (req, res) => {
  const query = "SELECT * FROM User WHERE is_deleted=0";
  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "SuccessFully Retrieve All User",
      User: result,
    });
  });
};

// Update User By Id
const updateUserById = (req, res) => {
  const { id, email, password, plan, role } = req.body;
  const query =
    "UPDATE User SET email=?,password=?,plan=? , role=? where id =?";
  const data = [id, email, password, plan, role];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Update User" });
  });
};

//Delete User By ID
const deleteUserById = (req, res) => {
  const { id } = req.body;
  const query = "UPDATE User SET is_deleted=1 where id =?";
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Delete User" });
  });
};
module.exports = {
  CreateNewUser,
  getAllUser,
  updateUserById,
  deleteUserById,
};
