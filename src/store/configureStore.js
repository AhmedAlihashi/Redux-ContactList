import { createStore } from "redux";
import rootReducer from "../reducers";
//rootReducer is the index.js file
export const configureStore = (initialState) =>
  createStore(rootReducer, initialState);
