import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./components/card/Card";
import styles from "./styles.module.scss";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleCharacterClick = (id) => {
    navigate(`/personajes/info/${id}`);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character?page=1"
        );
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
    <div className={styles.general}>
      <div className={styles.container}>
        <h2 className={styles.title}>Personajes</h2>
        <div className={styles.list}>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            characters.map((character) => (
              <Card
                key={character.id}
                character={character}
                onClick={() => handleCharacterClick(character.id)}
                className={styles.character} // Aplicar clase para el Card
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Characters;
