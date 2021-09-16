import React, {useState} from "react";
import ChatImg from "../../resources/images/chatbox.svg";
import ChatSection from "../ChatSection/ChatSection";

const ChatBoxButton = ({ room, handleShow }) => {
    const [show, setShow] = useState(false)
    // const onClick = () => setShow((preShow) => {
    //     return !preShow;
    // })

    return (
        <div className="video_button_container">
            <img
                src={ChatImg}
                onClick={handleShow}
                className="video_button_image"
            />
            {show ? <ChatSection />:null}
        </div>
    );
};

export default ChatBoxButton;
