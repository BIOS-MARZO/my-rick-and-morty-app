import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import styles from "./styles.module.scss";

const Characters = () => {
  const charactersInitialState = [];
  const errorInitialState = "";

  const [characters, setCharacters] = useState(charactersInitialState);
  const [errorMessage, setErrorMessage] = useState(errorInitialState);

  const handleCharacterClick = (id) => {
    console.log(`Character ${id} clicked`);
  }

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
      <div className={styles.wrapperCharacters}>
        {errorMessage.length > 0 ? (
          <p>{errorMessage}</p>
        ) : (
          characters.map((character) => (
            <Card key={character.id} character={character} onClick={() => {handleCharacterClick(character.id)}} />
          ))
        )}
      </div>
    </div>
  );
};

export default Characters;
