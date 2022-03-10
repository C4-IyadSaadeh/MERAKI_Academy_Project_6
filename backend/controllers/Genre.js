// Connection to database server.
const connection = require("../database/db");

// This Function Add New Genre 
const CreateNewGenre = (req, res) => {
  const { title } = req.body;
  const query = "INSERT INTO Genre (title) VALUES (?)";
  const data = [title];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(200)
      .json({ success: true, message: "SuccessFully Add New Genre" });
  });
};

// Retrieve All Genres
const getAllGenre = (req, res) => {
  const query = "SELECT * FROM Genre WHERE is_deleted=0";
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
        message: "SuccessFully Retrieve All Genre",
        Genre: result,
      });
  });
};

// Update Genre By Id
const updateGenreById = (req, res) => {
  const { id, title } = req.body;
  const query = "UPDATE Genre SET title=? where id =?";
  const data = [id, title];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Update Genre" });
  });
};

//Delete Genre By ID
const deleteGenreById = (req, res) => {
  const { id } = req.body;
  const query = "UPDATE Genre SET is_deleted=1 where id =?";
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res
      .status(202)
      .json({ success: true, message: "SuccessFully Delete Genre" });
  });
  module.exports = {
    CreateNewGenre,
    getAllGenre,
    updateGenreById,
    deleteGenreById,
  };
};
