// Connection to database server.
const connection = require("../database/db");

// Retrieve All Genres
const getAllGenre = (req, res) => {
  const query = "SELECT genre FROM Movie WHERE is_deleted=0";
  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "SuccessFully Retrieve All Genre",
      Genre: result,
    });
  });
};

// get movie by genre
const getMovieByGenre = (req, res) => {
  const query = "SELECT * FROM Movie WHERE is_deleted = 0 and genre  = ?";
  const data = [req.body.genre];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "Successful Retrieved Movie",
      Movie: result,
    });
  });
};

module.exports = {
  
  getAllGenre,
  getMovieByGenre
  
};
