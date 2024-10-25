import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const DetailCharacter = () => {
  const [character, setCharacter] = useState({});
  const { characterId } = useParams();

  console.log('Parametros por URL', characterId);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        // console.log(data);
        setCharacter(data);
      } catch (error) {
        console.error(error);
        // setErrorMessage(
        //   "Oye algo salió mal, no podemos cargar los personajes 😥"
        // );
      }
    };

    fetchCharacters();
  }, []);

  console.log("Personaje desde la variable character que es un estado", character);
  return (
    <div>DetailCharacter</div>
  )
}

export default DetailCharacter