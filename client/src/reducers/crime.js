import { FETCH_CRIMES } from "../actions/types";

const initialState = {
  crimes: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CRIMES:
      return {
        ...state,
        crimes: payload,
        loading: false
      };
    default:
      return state;
  }
}
