import React from 'react';
import './App.css';
import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Display from './Components/Display';
import Card from './Components/Card';

function App() {
  return (
    <>
      <div className="FirstDiv">
        <div>
          <Navbar></Navbar>
        </div>
        <Display></Display>
        <Background></Background>
      </div>
      <Card title = {"Object Detection & Depth Estimation"}></Card>
    </>
  );
}
export default App;
