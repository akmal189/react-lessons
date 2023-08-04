import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogReducer";

let reducersList = combineReducers({
    dialogspage: dialogsReducer
});

let store = createStore(reducersList);

export default store;