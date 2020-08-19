import React from 'react';
import GlobalStyles from '@modules/globalStyles'
import RouterWrapper from '@src/Router/RouterWrapper'
import NavBar from '@components/molecules/NavBar';

const App = () => {

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <RouterWrapper />
    </ >
  )
}

export default App;
