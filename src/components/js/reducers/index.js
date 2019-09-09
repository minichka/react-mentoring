import {
  FETCH_LIST_BEGIN,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_ERROR
} from "./../actions/listActions";

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
      return { ...state, queryString: action.payload };
    case "CHANGE_SEARCH_TYPE":
      return { ...state, searchType: action.payload };
    case FETCH_LIST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        fotos: action.payload
      };
    case FETCH_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        fotos: []
      };
    default:
      return state;
  }
}

//default rootReducer;
