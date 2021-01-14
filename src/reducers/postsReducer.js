import { FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SET_PAGE_COUNT, SET_OFFSET } from "../actions/actionTypes";

const initialState = {
  posts: [],
  loading: true,
  offset: 0,
  pageCount: 0,
  perPage: 3,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SHOW_LOADER:
        return {
          ...state,
          loading: action.payload,
        }
    case HIDE_LOADER:
        return {
          ...state,
          loading: action.payload
        }
    case SET_PAGE_COUNT:
        return {
          ...state,
          pageCount: action.payload
        }
    case SET_OFFSET: 
        return {
          ...state,
          offset: action.payload
        }
    default:
      return state;
  }
};

export default postsReducer;