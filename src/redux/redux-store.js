import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";

const reducers = combineReducers({
    dialoguesPage: dialoguesReducer,
    profilePage: profileReducer
});

const store = createStore(reducers);

export default store;
