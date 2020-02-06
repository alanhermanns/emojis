import React from 'react';
import Character from './Character';
import { useCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';

const Characters = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Link to={`/character/${character.id}`}>
        <ErrorBoundary>
          <Character {...character} />
        </ErrorBoundary>
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default Characters;
