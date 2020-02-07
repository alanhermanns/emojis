import React from 'react';
import { useCharacters } from '../../hooks/characters';

export default function Characters() {
  const { characters, loading, error } = useCharacters();
  if(loading) return <h1>Loading</h1>;
  if(error) return <h1>Error</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <p>{character.name}</p>
    </li>
  ));

  return (
    <>
      <ul>
        {characterElements}
      </ul>
    </>
  );
}
