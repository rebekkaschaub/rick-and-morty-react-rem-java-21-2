import "./App.css";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import { useEffect, useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import { loadCharacter } from "./service/api-service";

function App() {
  const [searchString, setSearchString] = useState("");
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState();
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState();

  useEffect(() => {
    loadData(page);
  }, [page]);

  const filterCharacter = characters.filter((character) =>
    character.name.toLowerCase().includes(searchString.toLowerCase())
  );

  function loadData(page) {
    setLoad(true);

    loadCharacter(page)
      .then((response) => {
        setCharacters(response.results);
        setInfo(response.info);
      })
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
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        previous
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === info?.pages}>
        next
      </button>
      <section>{load && <LoadingSpinner />}</section>
      {error && <ErrorMessage />}
      {filterCharacter.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
