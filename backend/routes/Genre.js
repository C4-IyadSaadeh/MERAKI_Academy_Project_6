const express = require("express");
const GenreRouter = express.Router();
const {
  CreateNewGenre,
  getAllGenre,
  updateGenreById,
  deleteGenreById,
} = require("../controllers/Genre");

GenreRouter.post("/createGenre", CreateNewGenre);
GenreRouter.get("/all", getAllGenre);
GenreRouter.put("/updateGenreById", updateGenreById);
GenreRouter.delete("/deleteGenreById", deleteGenreById);
module.exports = GenreRouter;
