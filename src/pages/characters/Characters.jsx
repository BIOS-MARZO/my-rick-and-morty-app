import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card/Card";

const Characters = () => {
  const charactersInitialState = [];
  const errorInitialState = "";

  const [characters, setCharacters] = useState(charactersInitialState);
  const [errorMessage, setErrorMessage] = useState(errorInitialState);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character?page=1"
        );
        console.log(data);
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
        setErrorMessage(
          "Oye algo salió mal, no podemos cargar los personajes 😥"
        );
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Personajes</h2>

      {errorMessage.length > 0 ? (
        <p>{errorMessage}</p>
      ) : (
        characters.map((character) => (
          <Card key={character.id} character={character} />
        ))
      )}
    </div>
  );
};

export default Characters;
