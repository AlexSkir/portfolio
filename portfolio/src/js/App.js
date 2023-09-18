import { hot } from 'react-hot-loader';
import React from 'react';
import AppRouter from './routes';
import ThemeWrapper from './common/ThemeWrapper';

const App = () => {
  return (
    <ThemeWrapper>
      <AppRouter />
    </ThemeWrapper>
  );
};

export default hot(module)(App);
