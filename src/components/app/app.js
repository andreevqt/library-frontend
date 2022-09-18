import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CustomSwitch } from '../custom-switch';

export const App = () => {
  return (
    <Router>
      <CustomSwitch />
    </Router>
  );
};
