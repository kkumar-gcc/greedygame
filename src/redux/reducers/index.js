import { combineReducers } from "redux";
import { tableReducer } from "./tableReducer";

const reducers = combineReducers({
    allColumns:tableReducer
})

export default reducers;