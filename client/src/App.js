import React from 'react';
import NavBar from "./components/navBar/navBar";
import Header from './components/header/header';
import './App.css'

function App() {
  return (
  <div className="home">
    <NavBar style={{order:-1}}/>
    <Header/>
  </div>
  )
}

export default App;
