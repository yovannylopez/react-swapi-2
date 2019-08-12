import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Wrapper, Label } from '../shared/styles/Detail';

const WrapperCustom = styled(Wrapper)`
  border-top: 2px solid #3c3c3c;
  padding-top: 3rem;
`;

const WrapperList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding-left: 1.8rem;
`;

const ListItem = styled.li`
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

  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;

  @media (min-width: 48em) {
    flex: 0 0 calc(100% / 2);
    max-width: calc(100% / 2);
  }

  @media (min-width: 62em) {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
`;

const DetailList = ({ label, list }) => (
  <WrapperCustom>
    <Label>{label}</Label>
    {list.length ? (
      <WrapperList>
        {list.map((data, i) => (
          <ListItem key={i}>
            <p>Name: {data.name}</p>
            <p>Gender: {data.gender}</p>
            <p>Eyes color: {data.eye_color}</p>
            {/* TODO: Cargar las películas de cada personaje. */}
            {/* <span>Films: {data.films}</span> */}
          </ListItem>
        ))}
      </WrapperList>
    ) : (
      <p>We don't have any {label} data yet!</p>
    )}
  </WrapperCustom>
);

DetailList.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.array,
};

export default DetailList;
