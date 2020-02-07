import React from 'react';
import { useCharacters } from '../../hooks/characters';

export default function CharacterDetail() {
  const characters = useCharacters();

  return (
    <img src={characters[1].image} />
  );
}
