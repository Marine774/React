export const ADD_ARTICLE = "ADD_ARTICLE";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://my-json-server.typicode.com/Marine774/ApiFilms/films")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
