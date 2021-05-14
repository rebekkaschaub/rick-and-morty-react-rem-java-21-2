import "./App.css";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import { useState } from "react";
import axios from "axios";
import { usePromiseTracker } from "react-promise-tracker";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import { loadCharacter } from "./service/api-service";

function App() {
  const [searchString, setSearchString] = useState("");

  const [response, setResponse] = useState({ results: [] });

  const [error, setError] = useState();

  const [load, setLoad] = useState(false);

  const filterCharacter = response.results.filter((character) =>
    character.name.toLowerCase().includes(searchString.toLowerCase())
  );

  function loadData() {
    setLoad(true);

    loadCharacter()
      .then((response) => setResponse(response))
      .catch((error) => setError(error))
      .finally(() => setLoad(false));
  }

  return (
    <div className="App">
      <Header />
      <input
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
      />
      <button onClick={loadData}>load data</button>
      <section>{load && <LoadingSpinner />}</section>
      {error && <ErrorMessage />}
      {filterCharacter.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
