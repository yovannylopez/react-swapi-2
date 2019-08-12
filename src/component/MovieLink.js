import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieLinkStyle = styled.p`
  border-top: 2px solid #8e2e2e;
  color: #ffe81f;
  font-size: 1.4rem;
  padding-top: 1.2rem;
  text-transform: capitalize;

  .btn {
    color: currentColor;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #2098d1;
      text-decoration: underline;
    }
  }
`;

const MovieLink = ({ id }) => (
  <MovieLinkStyle>
    <Link className='btn' to={`/character/${id}`}>
      View Characters
    </Link>
  </MovieLinkStyle>
);

MovieLink.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieLink;
