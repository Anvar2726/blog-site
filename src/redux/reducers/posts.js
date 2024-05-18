import { POSTS } from "../types"

const initialState = {
    loading: false, 
    posts: [],
    total: 0,
    page: 0
}

const postsReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTS:
        return {
           ...state, ...payload
        }
  default:
    return state
  }
}


export default postsReducer;