import objectImg from './images/object.png';


export default function Card(props) {
    let logo = "";
    if(props.img == "object"){
        logo = objectImg;
    }
    else if(props.img == "ocr"){
        logo = objectImg;
    }
    else if(props.img == "speech"){
        logo = objectImg;
    }

    return (
        <div className="flex-container-card">
            <div className="card-flex-item-1">
                <div>{props.title}</div>
                <div>{props.content}</div>
            </div>
            <img src={logo} className="card-flex-item-2"></img>
        </div>
    )
}