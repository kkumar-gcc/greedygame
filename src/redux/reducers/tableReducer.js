import { ActionTypes } from "../constants/action-types";

const initialState = {
  columns: [],
};
export const tableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COLUMNS:
      return { ...state, columns: payload };
    default:
      return state;
  }
};
