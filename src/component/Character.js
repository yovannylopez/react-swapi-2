import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetailHeader from './DetailHeader';
import DetailList from './DetailList';
import Filter from './Filter';

const Wrapper = styled.section`
  background-color: rgba(22, 22, 22, 0.87);
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  padding: 3rem;
  width: 100%;
`;

const Detail = ({
  title,
  director,
  episode,
  characters
}) => (
  <Wrapper>
    <DetailHeader title={title} director={director} episode={episode}/>
    <Filter/>
    <DetailList label='Characters' list={characters} />
  </Wrapper>
);

Detail.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  episode: PropTypes.number,
  characters: PropTypes.array
};

export default Detail;
