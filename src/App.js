import React from 'react';
import './App.css';
import AppHwMaor from "./components/appHwMaor";
import AppDate from './comps_date/appDate';


function App() {
  return (
    <React.Fragment>
      <AppHwMaor />
      <AppDate/>
    </React.Fragment>
  );
}

export default App;
