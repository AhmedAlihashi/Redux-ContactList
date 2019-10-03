import { createStore } from "redux";
import rootReducer from "../reducers";
//rootReducer is the index.js file
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
