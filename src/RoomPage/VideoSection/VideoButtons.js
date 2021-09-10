import React from "react";
import { connect } from "react-redux";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";
import ChatBoxButton from "./ChatBoxButton";

const VideoButtons = (props) => {
    const { room, connectOnlyWithAudio } = props;

    return (
        <div className="video_buttons_container">
            <MicButton room={room} />
            {!connectOnlyWithAudio && <CameraButton room={room} />}
            <LeaveRoomButton room={room} />
            <SwitchToScreenSharingButton room={room} />
            <ChatBoxButton room={room} />
        </div>
    );
};

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

export default connect(mapStoreStateToProps)(VideoButtons);
