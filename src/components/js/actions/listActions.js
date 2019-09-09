export const FETCH_LIST_BEGIN = "FETCH_LIST_BEGIN";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_ERROR = "FETCH_LIST_ERROR";

export const fetchListBegin = () => ({
  type: FETCH_LIST_BEGIN
});
export const fetchListSuccess = list => ({
  type: FETCH_LIST_SUCCESS,
  payload: list
});

export const fetchListFailure = error => ({
  type: FETCH_LIST_ERROR,
  payload: { error }
});
export function fetchFotos() {
  return dispatch => {
    dispatch(fetchListBegin());
    return fetch("http://reactjs-cdp.herokuapp.com/movies")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchListSuccess(json.data));
        return json.data;
      })
      .catch(error => {
        dispatch(fetchListFailure(error));
        console.log(error);
      });
  };
}

function handleErrors(response) {
  if (!response) {
    throw Error(response.statusText);
  }
  return response;
}
