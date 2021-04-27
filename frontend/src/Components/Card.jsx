import React, { useState, useEffect } from 'react';
import objectImg from './images/object.png';
import ocrImg from './images/ocr.png';
import speechImg from './images/speech.png';
import depthImg from './images/depth.png';
import LoadingButton from './SubComponets/LoadingButton';
import LightBoxButton from './SubComponets/LightboxButton';
import Button from 'react-bootstrap/Button';

export default function Card(props) {
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

    return (
        flip ?
            <div className="flex-container-card">
                {console.log("R1")}
                <div className="card-flex-item-1">
                    <div>{props.title}</div>
                    <div className="card-content">{props.content}</div>
                    <LoadingButton variant="success" content="Try it ↲" />
                    <LightBoxButton heading={props.title} detailedContent={props.detailedContent} instructions={props.instructions} />
                </div>
                <img src={logo} className="card-flex-item-2"></img>
            </div>
            :
            <div className="flex-container-card">
                {console.log("R2")}
                <img src={logo} className="card-flex-item-2"></img>
                <div className="card-flex-item-1">
                    <div>{props.title}</div>
                    <div className="card-content">{props.content}</div>
                    <LoadingButton variant="success" content="Try it ↲" />
                    <LightBoxButton heading={props.title} detailedContent={props.detailedContent} instructions={props.instructions} />
                </div>
            </div>
    )
}