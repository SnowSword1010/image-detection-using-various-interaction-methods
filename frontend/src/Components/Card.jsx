import objectImg from './images/object.png';
import ocrImg from './images/ocr.png';
import speechImg from './images/speech.png';
import LoadingButton from './SubComponets/LoadingButton';

export default function Card(props) {

    let logo = "";
    if (props.img == "object") {
        logo = objectImg;
    }
    else if (props.img == "ocr") {
        logo = ocrImg;
    }
    else if (props.img == "speech") {
        logo = speechImg;
    }

    const flip = props.flip;

    return (
        flip ?
            <div className="flex-container-card">
                {console.log("R1")}
                <div className="card-flex-item-1">
                    <div>{props.title}</div>
                    <div className="card-content">{props.content}</div>
                    <LoadingButton></LoadingButton>
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
                    <LoadingButton></LoadingButton>
                </div>
            </div>
    )
}