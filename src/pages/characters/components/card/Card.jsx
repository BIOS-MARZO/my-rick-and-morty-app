import PropTypes from "prop-types";

const Card = ({ character }) => {
  // Desestructuración correcta de la prop character
  if (!character) return null; // Evita errores en caso de que character sea undefined

  return (
    <div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <h6>Nombre: {character.name}</h6>
        <span>Estado: {character.status}</span>
        <span>Especie: {character.species}</span>
        <span>Género: {character.gender}</span>
        <span>Origen: {character.origin.name}</span>
      </div>
    </div>
  );
};

// Definición de los tipos de las props
Card.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;
