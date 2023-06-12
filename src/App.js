import React from 'react';
import './App.css';
import AppHwMaor from "./components/appHwMaor";
import AppDate from './comps_date/appDate';
import ShopList from './comps_loop/shopList';
import ParentComp from './comps_color/parentComp';
import CoinList from './api_coins/coinList';


function App() {
  return (
    <React.Fragment>
      <AppHwMaor />
      <AppDate/>
      <ShopList/>
      <ParentComp/>
      <CoinList/>
    </React.Fragment>
  );
}

export default App;
