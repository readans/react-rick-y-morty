import { useState, useEffect } from "react";
import Characters from "./Characters";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <div className="content">
      <div className="header">
        <h1 className="title">RICK AND MORTY CHARACTERS</h1>
        <p className="subtitle">Data from rick and morty API</p>
      </div>
      <Characters characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default App;
