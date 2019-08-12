import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LoaderLogo } from '../assets/icon/loader.svg';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 70vh;
  width: 100%;

  .loader-logo {
    animation: loader-spin infinite 2.5s linear;
    height: 8rem;
    fill: #ffe81f;
  }

  @keyframes loader-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = props => (
  <Wrapper>
    <LoaderLogo className='loader-logo' />
  </Wrapper>
);

export default Loader;
