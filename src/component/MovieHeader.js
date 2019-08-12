import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
`;

const MovieTitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 2px;

  .btn {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #2098d1;
      text-decoration: underline;
    }
  }
`;

const MovieHeader = ({ id, title }) => (
  <MovieHeaderStyle>
    <MovieTitle>
      <Link className='btn' to={`/movie/${id}`}>
        Movie: {title}
      </Link>
    </MovieTitle>
  </MovieHeaderStyle>
);

MovieHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default MovieHeader;
