import React from "react";
import ChatImg from "../../resources/images/camera.svg";

const ChatBoxButton = ({ room }) => {
    const handleRoomDisconnection = () => {
        room.disconnect();
        // handle disconnection with room
        const siteUrl = window.location.origin;
        window.location.href = siteUrl;
    };

    return (
        <div className="video_button_container">
            <img
                src={ChatImg}
                onClick={ChatBoxButton}
                className="video_button_image"
            />
        </div>
    );
};

export default ChatBoxButton;
