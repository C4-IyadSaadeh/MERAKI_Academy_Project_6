const express = require('express');
const MovieRouter= express.Router();
const {
    CreateNewMovie,
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    updateMovieById,
    deleteMovieById,
  } = require('../controllers/Movie');

  MovieRouter.post('/createMovie',CreateNewMovie);
MovieRouter.get('/allMovies',getAllMovies);
MovieRouter.get('/getMovieByTitle',getMovieByTitle);
MovieRouter.get('/getMovieById',getMovieById);
MovieRouter.put('/updateMovieById',updateMovieById);
MovieRouter.delete('/deleteMovieById',deleteMovieById);

module.exports =MovieRouter;