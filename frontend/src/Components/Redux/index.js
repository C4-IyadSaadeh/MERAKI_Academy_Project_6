import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import loginsReducer from './Login/index';
import movieReducer from './Movie/index';
import userReducer from './User/index';
const reducers = combineReducers({loginsReducer,movieReducer,userReducer});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;