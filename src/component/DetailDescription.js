import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Text } from '../shared/styles/Detail';

import '../shared/styles/OpenCrawl.css';

const DetailDescription = ({ description, episode }) => (
  <Wrapper>
    <Label>Episode {episode}</Label>
    <Text>
      <span>
        <section className="intro">
          A long time ago, in a galaxy far, far away...
        </section>
        <span className="board">
          <span className="content">
            <p>{description}</p>
          </span>
        </span>
      </span>
    </Text>
  </Wrapper>
);

DetailDescription.propTypes = {
  description: PropTypes.string,
  episode: PropTypes.number,
};

export default DetailDescription;
