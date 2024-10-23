import PropTypes from "prop-types";
import styles from "./styles.module.scss"; // Importación correcta de módulos SCSS

const Card = ({ character, onClick }) => {
  if (!character) return null;

  return (
    <div className={styles.character} onClick={onClick}>
      <div>
        <img
          src={character.image}
          alt={character.name}
          className={styles.characterImage}
        />
      </div>
      <div className={styles.cardInfo}>
        <h6 className={styles.characterName}>{character.name}</h6>
        <span className={styles.characterStatus}>
          Estado: {character.status}
        </span>
        <span className={styles.characterSpecies}>
          Especie: {character.species}
        </span>
        <span className={styles.characterGender}>
          Género: {character.gender}
        </span>
        <span className={styles.characterOrigin}>
          Origen: {character.origin.name}
        </span>
      </div>
    </div>
  );
};

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
  onClick: PropTypes.func.isRequired,
};

export default Card;
