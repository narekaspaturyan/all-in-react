import { FETCH_DATA } from "../actions/actionTypes";

const initialState = {
  product: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
