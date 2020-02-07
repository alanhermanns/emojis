import React from 'react';
import { useCharacters } from '../../hooks/characters';

export default function Characters() {
  const characters = useCharacters();
  
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <p>{character.name}</p>
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
}
