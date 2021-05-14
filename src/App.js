import "./App.css";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import { useState } from "react";
import axios from "axios";
import { usePromiseTracker } from "react-promise-tracker";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [searchString, setSearchString] = useState("");

  const [response, setResponse] = useState({ results: [] });

  const [error, setError] = useState();

  const filterCharacter = response.results.filter((character) =>
    character.name.toLowerCase().includes(searchString.toLowerCase())
  );

  function loadData() {
    axios
      .get("https://rickandmortyapi.com/api/charac00ter")
      .then((response) => setResponse(response.data))
      .catch((error) => setError(error));
  }

  return (
    <div className="App">
      <Header />
      <input
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
      />
      <button onClick={loadData}>load data</button>
      {error && <ErrorMessage />}
      {filterCharacter.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
