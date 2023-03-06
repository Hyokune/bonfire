import { setup, styled } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';
import React from 'react';

setup(
  React.createElement,
  undefined,
  undefined,
  shouldForwardProp((prop) => prop[0] !== '$'), // Prevents props from forwarding that start with `$` symbol
);

const Title = styled('h1')`
  font-size: 120px;
`;

const App = () => (
  <div className="app">
    <Title>Bonfire</Title>
  </div>
);

export default App;
