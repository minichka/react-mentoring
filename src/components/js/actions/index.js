export function searchFoto(payload) {
  return { type: "SEARCH", payload };
}

export function changeSearchType(payload) {
  return { type: "CHANGE_SEARCH_TYPE", payload };
}
