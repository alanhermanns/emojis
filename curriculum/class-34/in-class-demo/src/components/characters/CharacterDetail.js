import React from 'react';
import PropTypes from 'prop-types';
import { useCharacter } from '../../hooks/characters';

const CharacterDetail = ({ match }) => {
  const character = useCharacter(match.params.id);

  const episodeLinks = character.episode.map(url => (
    <a key={url} href={url}>Episode {url.split('/').slice(-1)[0]}</a>
  ));

  return (
    <section>
      <h1>{character.name}</h1>
      <img src={character.image} />
      <p>{character.status}</p>
      <p>{character.species}</p>
      <ul>
        {episodeLinks}
      </ul>
    </section>
  );
};

CharacterDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterDetail;
