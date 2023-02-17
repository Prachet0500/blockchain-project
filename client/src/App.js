import React from 'react';
import NavBar from "./components/navBar/navBar";
import Header from './components/header/header';
import CardGroup from './components/cardGroup/cardGroup';
import './App.css';
import  CardData  from './data/cardData';
import CardHeader from './components/cardHeader/cardHeader';

function App() {
  return (
  <div className="home">
    <NavBar style={{order:-1}}/>
    <Header/>
    <CardHeader className="CardHeader"/>
    <CardGroup CardData={CardData} className="CardGroup"/>
  </div>
  )
}

export default App;
