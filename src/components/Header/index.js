import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Pesquisar" />
    </Search>
    <User>
      <img src="https://avatars2.githubusercontent.com/u/13707315?v=4" alt="Avatar" />
      Gustavo Henrique Michels
    </User>
  </Container>
);

export default Header;
