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
  const title1 = "Object Detection";
  const content1 = "A computer vision technique to identify and locate objects in images and videos, while accurately labeling them";
  const img1 = "object";
  // Modal
  const detailedContent1 = "";
  const instructions1 = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];

  const title2 = "Depth Estimation";
  const content2 = "A set of techniques and algorithms used to obtain the distance of an object in a scene";
  const img2 = "depth";
  // Modal
  const detailedContent2 = "";
  const instructions2 = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];

  const title3 = "Optical Character Recognition (OCR)";
  const content3 = "Process of digitizing a document into its constituent characters";
  const img3 = "ocr";
  // Modal
  const detailedContent3 = "";
  const instructions3 = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];

  const title4 = "Speech Synthesis";
  const content4 = "Artificial Production of human speech";
  const img4 = "speech";
  // Modal
  const detailedContent4 = "";
  const instructions4 = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];

  const transitionName1 = "Features";
  const transitionName2 = "Our Team";

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
        <Card title={title1} content={content1} img={img1} flip={false} detailedContent={detailedContent1} instructions={instructions1} />
        <Card title={title2} content={content2} img={img2} flip={true} detailedContent={detailedContent2} instructions={instructions2} />
        <Card title={title3} content={content3} img={img3} flip={false} detailedContent={detailedContent3} instructions={instructions3} />
        <Card title={title4} content={content4} img={img4} flip={true} detailedContent={detailedContent4} instructions={instructions4} />
      </div>
      <Footer></Footer>
    </>
  );
}
export default App;
