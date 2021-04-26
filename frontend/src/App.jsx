import React from 'react';
import './App.css';
import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Display from './Components/Display';
import Card from './Components/Card';
import TransitionHeading from './Components/TransitionHeading';
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

  const transitionName1 = "Features";
  const transitionName2 = "Out Team";
  return (
    <>
      <div className="FirstDiv">
        <div>
          <Navbar></Navbar>
        </div>
        <Display></Display>
        <Background></Background>
      </div>
      <TransitionHeading name={transitionName1} />
      <div className="background">
        <Card title={title1} content={content1} img={img1} flip={false}></Card>
        <Card title={title2} content={content2} img={img2} flip={true}></Card>
        <Card title={title3} content={content3} img={img3} flip={false}></Card>
      </div>
      <Footer></Footer>
    </>
  );
}
export default App;
