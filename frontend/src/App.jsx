import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import './App.css';
import Background from './Components/Background';
import CustomNavbar from './Components/CustomNavbar.jsx';
import Display from './Components/Display';
import Card from './Components/Card';
import TransitionHeading from './Components/TransitionHeading';
import Section2 from './Components/Section2';
// import Section25 from './Components/Section25';
import Team from './Components/Team';
import Technologies from './Components/Technologies';
import Footer from './Components/Footer';

import "animate.css/animate.min.css";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

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

  const transitionName0 = "Our Mission";
  const transitionName1 = "Features";
  const transitionName2 = "Our Team";

  return (
    <>

      <div id ="home" className="FirstDiv">
        <div>
          <CustomNavbar />
        </div>
        <Display></Display>
        <Background></Background>
      </div>
      <div id = "our-mission" className="section-2">

        <Section2 />
      </div>
      <div id= "features" className="section-3">

        <TransitionHeading name={transitionName1} />

        <Card title={title1} content={content1} img={img1} flip={false} detailedContent={detailedContent1} instructions={instructions1} />
        <Card title={title2} content={content2} img={img2} flip={true} detailedContent={detailedContent2} instructions={instructions2} />
        <Card title={title3} content={content3} img={img3} flip={false} detailedContent={detailedContent3} instructions={instructions3} />
        <Card title={title4} content={content4} img={img4} flip={true} detailedContent={detailedContent4} instructions={instructions4} />
      </div>
      <Technologies></Technologies>
      <Footer></Footer>
    </>
  );
}
export default App;
