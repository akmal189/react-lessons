import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogReducer";
import profileReducer from "./profilesReducer";

let reducersList = combineReducers({
    dialogReducer: dialogsReducer,
    profileReducer: profileReducer
});

let store3 = createStore(reducersList);

export default store3;