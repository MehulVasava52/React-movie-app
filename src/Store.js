import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
// need reducer
import mainReducer from "./reducer/mainReducer";

export const store = createStore(mainReducer, applyMiddleware(Thunk));
