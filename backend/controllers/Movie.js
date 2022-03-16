const connection = require("../database/db");
// -------- Function to create Movie .
const CreateNewMovie = (req, res) => {
  const {
    image,
    title,
    year,
    duration,
    rating,
    quality,
    genre,
    description,
    trailer,
    link
  } = req.body;
  const query = `INSERT INTO Movie VALUES (?,?,?,?,?,?,?,?,?,?)`;
  const data = [
    image,
    title,
    year,
    duration,
    rating,
    quality,
    genre,
    description,
    trailer,
    link
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    }
    return res
      .status(201)
      .json({ success: true, message: "Successful Add New Movie" });
  });
};
// This function Retrieve all Movie to display in Home Screen.
const getAllMovies = (req, res) => {
  const query = "SELECT * FROM Movie WHERE is_deleted = 0";
  connection.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "Successful Retrieved Movies",
      Movies: result,
    });
  });
};
// This Function Retrieve Movie in Detail Movie Page.
const getMovieById = (req, res) => {
  const query = "SELECT * FROM Movie WHERE is_deleted = 0 and id = ?";
  const data = [req.params.id];
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
// This Function Retrieve the Movie From Title I will Using in search
const getMovieByTitle = (req, res) => {
  const query = "SELECT * FROM Movie WHERE is_deleted = 0 and title REGEXP = ?";
  const data = [req.body.title];
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
// This Function Update Info Movie By Id.
const updateMovieById = (req, res) => {
  const {
    image,
    title,
    year,
    duration,
    rating,
    quality,
    genre,
    description,
    trailer,
    link,
    id,
  } = req.body;
  const query = `UPDATE Movie SET image=?,title=?,year=?,duration=?,rating=?,
  quality=?,genre=?,description=?,trailer=?,link=? WHERE id=?`;
  const data = [
    image,
    title,
    year,
    duration,
    rating,
    quality,
    genre,
    description,
    trailer,
    link,
    id,
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    }
    return res
      .status(202)
      .json({ success: true, message: "Successful Update Movie" });
  });
};
// This Function Delete Movie in client But doesn't Delete Movie From Database.
const deleteMovieById = (req, res) => {
  const { id } = req.body;
  const query = `UPDATE Movie SET is_deleted=1 WHERE id=?`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    }
    return res
      .status(202)
      .json({ success: true, message: "Successful Delete Movie" });
  });
};
module.exports = {
  CreateNewMovie,
  getAllMovies,
  getMovieById,
  getMovieByTitle,
  updateMovieById,
  deleteMovieById,
};
