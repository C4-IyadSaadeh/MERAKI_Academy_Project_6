// Connection to database server.
const connection = require("../database/db");

// This Function Add New Genree 
const CreateNewGenree = (req, res) => {
  const { title } = req.body;
  const query = "INSERT INTO Genree (title) VALUES (?)";
  const data = [title];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(200)
      .json({ success: true, message: "SuccessFully Add New Genree" });
  });
};

// Retrieve All Genrees
const getAllGenree = (req, res) => {
  const query = "SELECT * FROM Genree WHERE is_deleted=0";
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
        message: "SuccessFully Retrieve All Genree",
        Genree: result,
      });
  });
};

// Update Genree By Id
const updateGenreeById = (req, res) => {
  const { id, title} = req.body;
  const query = "UPDATE Genree SET title=? where id =?";
  const data = [id, title];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Update Genree" });
  });
};

//Delete Genree By ID
const deleteGenreeById = (req, res) => {
  const { id } = req.body;
  const query = "UPDATE Genree SET is_deleted=1 where id =?";
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Delete Genree" });
  });
  module.exports = {
    CreateNewGenree,
    getAllGenree,
    updateGenreeById,
    deleteGenreeById,
  };
};
