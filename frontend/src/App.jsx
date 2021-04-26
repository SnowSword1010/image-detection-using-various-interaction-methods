import React from 'react';
import './App.css';
import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Display from './Components/Display';
import Card from './Components/Card';
import Team from './Components/Team';
import Footer from './Components/Footer';

function App() {
  const title1 = "Object Detection & Depth Estimation";
  const content1 = "A computer vision technique to identify and locate objects in images and videos, while accurately labeling them";
  const img1 = "object";

  const title2 = "Optical Character Recognition";
  const content2 = "A process of digitizing a document into its constituent characters";
  const img2 = "ocr";

  const title3 = "Speech Synthesis";
  const content3 = "Artificial Production of human speech";
  const img3 = "speech";

  return (
    <>
      <div className="FirstDiv">
        <div>
          <Navbar></Navbar>
        </div>
        <Display></Display>
        <Background></Background>
      </div>
      <Card title={title1} content = {content1} img = {img1}></Card>
      <Footer></Footer>
    </>
  );
}
export default App;
