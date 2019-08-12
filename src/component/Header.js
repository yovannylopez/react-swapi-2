import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../shared/assets/icon/logo.svg';

const HeaderStyle = styled.header`
  align-items: center;
  display: flex;
  height: 13rem;
  justify-content: center;

  .logo {
    fill: #ffe81f;
    max-width: 45rem;
    width: 100%;
  }
`;

const Header = (props => (
  <HeaderStyle>
    <Logo className='logo' />
  </HeaderStyle>
));

export default Header;
