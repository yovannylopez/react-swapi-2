import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
`;

const MovieEpisode = styled.div`
  font-family: inherit;
  color: #fff;
  margin-bottom: 2.5rem;
  overflow-wrap: break-word;
  white-space: normal;
`;

const MovieDescription = ({ episode, director }) => (
  <MovieDescriptionStyle>
    <MovieEpisode>
      <p><strong>Episode:</strong> {episode}</p>
      <br/>
      <p><strong>Director:</strong> {director}</p>
    </MovieEpisode>
  </MovieDescriptionStyle>
);

MovieDescription.propTypes = {
  episode: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired
};

export default MovieDescription;
