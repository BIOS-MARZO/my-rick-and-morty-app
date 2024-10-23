import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailCharacter = () => {
  const [character, setCharacter] = useState({});
  const { characterId } = useParams(); // Acceso correcto al parámetro

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, [characterId]); // Dependencia para ejecutar el efecto cuando characterId cambie

  return (
    <div>
      <h1>Detalles del Personaje</h1>
      {character.name ? (
        <div>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>Estado: {character.status}</p>
          <p>Especie: {character.species}</p>
          <p>Género: {character.gender}</p>
          <p>Origen: {character.origin?.name}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DetailCharacter;
