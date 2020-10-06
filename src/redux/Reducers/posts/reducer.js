import { types } from "../../Actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {

  case types.GET_POSTS:
    // return { ...state, ...payload }
    return payload

  default:
    return state
  }
}

