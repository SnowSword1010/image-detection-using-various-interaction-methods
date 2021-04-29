import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import objectImg from './images/object.png';
import ocrImg from './images/ocr.png';
import speechImg from './images/speech.png';
import depthImg from './images/depth.png';
import LoadingButton from './SubComponets/LoadingButton';
import LightBoxButton from './SubComponets/LightboxButton';
import Button from 'react-bootstrap/Button';

export default function Card(props) {

    useEffect(() => {
        AOS.init({
            duration: 700
        });
    }, []);

    let logo = "";
    if (props.img === "object") {
        logo = objectImg;
    }
    else if (props.img === "ocr") {
        logo = ocrImg;
    }
    else if (props.img === "speech") {
        logo = speechImg;
    }
    else if (props.img === "depth") {
        logo = depthImg;
    }

    const flip = props.flip;



    if (flip == true) {
        return (<div data-aos="zoom-in-up" className="flex-container-card text">
            <div className="card-flex-item-1">
                <div >{props.title}</div>
                <div className="card-content">{props.content}</div>
                <LoadingButton variant="success" content="Try it ↲" />
                <LightBoxButton heading={props.title} detailedContent={props.detailedContent} instructions={props.instructions} />
            </div>
            <img src={logo} className="card-flex-item-2"></img>
        </div>)
    }
    else {
        return (<div data-aos="zoom-in-down" className="flex-container-card text" >
            <img src={logo} className="card-flex-item-2"></img>
            <div className="card-flex-item-1">
                <div>{props.title}</div>
                <div className="card-content">{props.content}</div>
                <LoadingButton variant="success" content="Try it ↲" />
                <LightBoxButton heading={props.title} detailedContent={props.detailedContent} instructions={props.instructions} />
            </div>
        </div>)
    }
}