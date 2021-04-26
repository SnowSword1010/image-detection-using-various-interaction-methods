import logo from './images/face.png';

export default function display() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <div className="flex-container-title">
            <div className="title-flex-item-1">Image detection using various <br />Interaction Methods<br /><div className="Introduction">{text}</div></div>
            <img src = {logo} className = "title-flex-item-2"></img>
            {/* <div className="Introduction">Items */}
            {/* </div> */}
        </div>
    )
}