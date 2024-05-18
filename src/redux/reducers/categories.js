import { CATEGORIES } from "../types"

const initialState = {
    loading: false,
    categories: [],
    total: 0,
    page: 1,
}

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATEGORIES:
    return { ...state, ...payload }
  default:
    return state
  }
}

export default categoriesReducer;
