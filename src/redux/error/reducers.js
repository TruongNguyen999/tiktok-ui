import { ERROR, CLEAR_ERROR } from "../types";

const initialState = {
  message: "",
  code: null,
  context: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        message: action.payload.message || action.payload,
        code: action.payload.code || null,
        context: action.payload.context || null,
      };
    case CLEAR_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default errorReducer;
