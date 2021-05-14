import axios from "axios";

export function loadCharacter() {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => response.data);
}
