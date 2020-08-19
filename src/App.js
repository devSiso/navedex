import React from 'react';
import { Router } from "@reach/router"
import GlobalStyles from '@modules/globalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Home path="/" />
        <Dashboard path="dashboard" />
      </Router>
    </ >
  )
}

const Home = () => (
  <div>
    <h2>Welcome</h2>
    <span className="icon-delete" style={{fontSize: '32px' }} />
    <span className="icon-arrow" style={{fontSize: '32px' }} />
    <span className="icon-logo" style={{fontSize: '32px' }} />
    <span className="icon-close" style={{fontSize: '32px' }} />
    <span className="icon-edit" style={{fontSize: '32px' }} />
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <span className="icon-delete" style={{fontSize: '32px' }} />
    <span className="icon-arrow" style={{fontSize: '32px' }} />
    <span className="icon-logo" style={{fontSize: '32px' }} />
    <span className="icon-close" style={{fontSize: '32px' }} />
    <span className="icon-edit" style={{fontSize: '32px' }} />
  </div>
);

export default App;
