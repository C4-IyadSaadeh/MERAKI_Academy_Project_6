// Connection to database server.
const connection = require("../database/db");

// This Function Add New Role
const CreateNewRole = (req, res) => {
  const { title } = req.body;
  const query = "INSERT INTO Role (title) VALUES (?)";
  const data = [title];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(200)
      .json({ success: true, message: "SuccessFully Add New Role" });
  });
};

// Retrieve All Roles
const getAllRole = (req, res) => {
  const query = "SELECT * FROM Role WHERE is_deleted=0";
  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "SuccessFully Retrieve All Role",
      Role: result,
    });
  });
};

// Update Role By Id
const updateRoleById = (req, res) => {
  const { id, title } = req.body;
  const query = "UPDATE Role SET title=? where id =?";
  const data = [id, title];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Update Role" });
  });
};

//Delete Role By ID
const deleteRoleById = (req, res) => {
  const { id } = req.body;
  const query = "UPDATE Role SET is_deleted=1 where id =?";
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Delete Role" });
  });
};
module.exports = {
  CreateNewRole,
  getAllRole,
  updateRoleById,
  deleteRoleById,
};
