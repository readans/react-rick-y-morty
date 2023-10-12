import { useRef, useState } from "react";
import "./Characters.css";

function CharacterOptions({ id, handleDelete }) {
  return (
    <div className="bar">
      <div className="bar-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </div>
      <div className="bar-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => handleDelete(id)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="bar-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
      <div className="bar-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
}

function Character({ id, name, url, handleDelete }) {
  const cardRef = useRef(null);
  const [isDblClicked, setIsDblClicked] = useState(false);
  const handleClick = () => {
    console.log("has been clicked");
    setIsDblClicked(true);
    document.addEventListener("click", (e) => {
      /**
       * @type {Element}
       */
      const card = cardRef.current;

      if (card.contains(e.target)) return;
      setIsDblClicked(false);
    });
  };

  return (
    <div className="card" onClick={() => handleClick()} ref={cardRef}>
      <div className="card-top">
        <div className="content-img">
          <img className="img" src={url} alt={name} />
        </div>
        {isDblClicked && (
          <CharacterOptions id={id} handleDelete={handleDelete} />
        )}
      </div>
      <h3 className="name">{name}</h3>
    </div>
  );
}

export default function Characters({ characters, setCharacters }) {
  const handleDelete = (id) => {
    const charactersFiltered = [...characters].filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };
  return (
    <div className="board">
      {characters.map((character) => (
        <Character
          key={character.id}
          id={character.id}
          name={character.name}
          url={character.image}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
