import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as BackLogo } from '../shared/assets/icon/back.svg';

const Header = styled.header`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  text-align: center;
  width: 100%;
`;

const Back = styled.div`
  align-self: flex-start;
  margin-bottom: 1.5rem;

  a {
    align-items: center;
    color: #9d9d9d;
    display: flex;
    font-family: inherit;
    font-size: 1.6rem;
    text-decoration: none;
  }

  svg {
    fill: #9d9d9d;
    height: 1.6rem;
    width: 1.6rem;
  }
`;

const Title = styled.h2`
  font-family: 'Star Jedi', 'Open Sans', sans-serif;
  font-size: 4rem;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
`;

const Team = styled.p`
  font-family: inherit;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const DetailHeader = ({ title, director }) => (
  <Header>
    <Back>
      <Link to='/'>
        <BackLogo />
        Home
      </Link>
    </Back>
    <Title>Movie: {title}</Title>
    <Team>Director: {director}</Team>
  </Header>
);

DetailHeader.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
};

export default DetailHeader;
