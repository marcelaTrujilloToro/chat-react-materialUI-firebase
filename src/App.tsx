import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderChat from './components/layout/Header';
import User from './components/User';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <CssBaseline/>
      <HeaderChat>
        <User/>
      </HeaderChat>
      <Routes/>
    </Router>
  );
}

export default App;
