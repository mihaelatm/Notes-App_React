import { createStore } from "redux";
import noteReducer from "./reducers/reducersNote";

const store = createStore(noteReducer);

export default store;
