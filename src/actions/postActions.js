import axios from "axios";
import { FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SET_PAGE_COUNT, SET_OFFSET } from "./actionTypes";

export function showLoader() {
  return {
    type: SHOW_LOADER,
    payload: true
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
    payload: false
  }
}

export function setPageCount(data, perPage) {
  return dispatch => {
    const pageCount =  Math.ceil(data.length / perPage);
    dispatch(
      {
        type: SET_PAGE_COUNT,
        payload: pageCount
      }
    )
  }
}

export function setOffset(selectedPage, perPage) {
  return dispatch => {
    const offset = selectedPage + perPage;
    dispatch(
      {
        type: SET_OFFSET,
        payload: offset
      }
    )
  }
}

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(showLoader())
    try {
      const posts = await axios.get(
        "https://api.allin.am/react/blog_items"
      );
      dispatch(fetchPostSuccess(posts.data));
    } catch (e) {
      console.log(e.message);
    }
    dispatch(hideLoader());
  };
};

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POSTS,
    payload: posts,
  };
};
