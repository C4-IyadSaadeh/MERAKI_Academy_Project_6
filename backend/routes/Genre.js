const express = require("express");
const GenreRouter = express.Router();
const {
  getAllGenre,
  getMovieByGenre

} = require("../controllers/Genre");


GenreRouter.get("/all", getAllGenre);
GenreRouter.get("/singleGenre", getMovieByGenre);

module.exports = GenreRouter;
