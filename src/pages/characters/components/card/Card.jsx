import React from 'react'

const Card = (props) => {

  const character = props.character
  
  return (
    <div key={character.id}>
    <div>
      <img src={character.image} alt={character.name} />
    </div>
    <div>
      <h6>Nombre: {character.name}</h6>
      <span>Estado: {character.status}</span>
      <span>Especie: {character.species}</span>
      <span>Genero: {character.gender}</span>
      <span>Origen: {character.origin.name}</span>
    </div>
  </div>
  )
}

export default Card