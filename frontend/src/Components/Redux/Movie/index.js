// initial State
const initialState = {
  movies: [],
  genre: [],
};

// Reducers
const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_MOVIES":
      return [...state.movies, payload];
    case "SET_ONE":
      console.log({ type, payload });
      console.log({ state });
      const test = state?.filter((movie) => movie.id == payload);
      return test;

    case "SET_MOVIES_GENRE":
      return {
        movies: state.movies.filter((movie) => movie.genre === payload),
      };
    case "UPDATE_MOVIE":
      return {
        movies: state.movies.map((movie) => {
          if (movie.id === payload.id) {
            return payload;
          } else {
            return movie;
          }
        }),
      };
    case "DELETE_MOVIE":
      return {
        movies: state.movies.filter((movie) => movie.id !== payload.id),
      };
    case "CREATE_MOVIE":
      return { movies: [...state.movies, payload] };
    default:
      return state;
  }
};
export default movieReducer;
// Actions
export const setMovies = (movies) => {
  return { type: "SET_MOVIES", payload: movies };
};
export const setMoviesByGenre = (movies) => {
  return { type: "SET_MOVIES_GENRE", payload: movies };
};
export const setGenre = () => {
  return { type: "SET_GENRE" };
};
export const setOne = (id) => {
  return { type: "SET_ONE", payload: id };
};
export const updataMovie = (movie) => {
  return { type: "UPDATE_MOVIE", payload: movie };
};
export const deleteMovie = (movie) => {
  return { type: "DELETE_MOVIE", payload: movie };
};
export const createMovie = (movie) => {
  return { type: "CREATE_MOVIE", payload: movie };
};
