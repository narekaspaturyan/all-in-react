import axios from "axios";
import { FETCH_DATA } from "./actionTypes";

const endPoint = "";

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get(endPoint);

      dispatch(fetchProductSuccess(data.data));
    } catch (e) {
      if (e.response && e.response.status === 404) {
        console.log("Post Not Found");
      } else {
        console.log(e.message);
        console.log("Unexpected error occured");
      }
    }
  };
};

export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_DATA,
    payload: product,
  };
};
