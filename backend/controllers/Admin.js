// Connection to database server.
const connection = require("../database/db");

// This Function Add New Admin Admin Meaning = Moderator.
const CreateNewAdmin = (req, res) => {
  const { email, password, role } = req.body;
  const query = "INSERT INTO Admin (email,password,role) VALUES (?,?,?)";
  const data = [email, password, role];
  try {
    connection.query(query, data, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "server Error",
          error: err.message,
        });
      }
      return res
        .status(201)
        .json({ success: true, message: "SuccessFully Add New Admin" });
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

// Retrieve All Admins
const getAllAdmin = (req, res) => {
  const query = "SELECT * FROM Admin WHERE is_deleted=0";
  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "SuccessFully Retrieve All Admin",
      Admin: result,
    });
  });
};

// Update Admin By Id
const updateAdminById = (req, res) => {
  const { id, email, password, role } = req.body;
  const query = "UPDATE Admin SET email=?,password=?,role=? where id =?";
  const data = [id, email, password, role];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Update Admin" });
  });
};

//Delete Admin By ID
const deleteAdminById = (req, res) => {
  const { id } = req.body;
  const query = "UPDATE Admin SET is_deleted=1 where id =?";
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Delete Admin" });
  });
};
module.exports = {
  CreateNewAdmin,
  getAllAdmin,
  updateAdminById,
  deleteAdminById,
};
