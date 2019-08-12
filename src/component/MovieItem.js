// Dependencies core
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import MovieHeader from './MovieHeader';
import MovieDescription from './MovieDescription';
import MovieLink from './MovieLink';

// Styles
import { Col } from '../shared/styles/Grid';

// Assets
import bgCardOne from '../shared/assets/images/bg-card-1.jpg';
import bgCardTwo from '../shared/assets/images/bg-card-2.jpg';
import bgCardThree from '../shared/assets/images/bg-card-3.jpg';
import bgCardFour from '../shared/assets/images/bg-card-4.jpg';
import bgCardFive from '../shared/assets/images/bg-card-5.jpg';
import bgCardSix from '../shared/assets/images/bg-card-6.jpg';
import bgCardSeven from '../shared/assets/images/bg-card-7.jpg';

const ColCustom = styled(Col)`
  &:nth-child(1) > * {
    background: url(${bgCardOne});
  }

  &:nth-child(2) > * {
    background: url(${bgCardTwo});
  }

  &:nth-child(3) > * {
    background: url(${bgCardThree});
  }

  &:nth-child(4) > * {
    background: url(${bgCardFour});
  }

  &:nth-child(5) > * {
    background: url(${bgCardFive});
  }

  &:nth-child(6) > * {
    background: url(${bgCardSix});
  }

  &:nth-child(7) > * {
    background: url(${bgCardSeven});
  }
`;

const MovieContent = styled.div`
  background-color: #232323;
  border-radius: 0.3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px 1px #D15441, 0px 0px 5px rgba(0, 0, 0, 0);
  color: #fff;
  display: block;
  padding: 2rem;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: box-shadow;

  &:hover {
    box-shadow: 0px 0px 10px 3px #2098d1, 0px 0px 10px rgba(0, 0, 0, 0);
  }
`;

const MovieItem = ({ id, title, episode, director }) => (
  <ColCustom>
    <MovieContent>
      <MovieHeader id={id} title={title} />
      <MovieDescription episode={episode} director={director}/>
      <MovieLink id={id} />
    </MovieContent>
  </ColCustom>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  episode: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired
};

export default MovieItem;
