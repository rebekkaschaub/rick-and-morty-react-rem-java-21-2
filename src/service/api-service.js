import axios from "axios";

export function loadCharacter(page) {
  return axios
    .get("https://rickandmortyapi.com/api/character/?page=" + page)
    .then((response) => response.data);
}
