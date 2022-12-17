import { ActionTypes } from "../constants/action-types";

export const setColumns=(columns)=>{
    return {
        type:ActionTypes.SET_COLUMNS,
        payload:columns
    }
}