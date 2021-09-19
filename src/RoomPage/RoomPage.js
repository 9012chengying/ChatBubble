import React , {useEffect, useState} from "react";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import ChatSection from "./ChatSection/ChatSection";
import {connect} from "react-redux";
import {setTwilioAccessToken} from '../store/actions';
import {getTokenFromTwilio} from "../utils/twilioUtils";
import Overlay from "./Overlay";
import { useHistory } from 'react-router-dom';
import "./RoomPage.css";

const RoomPage = (props) => {
    const { identity, roomId, setTwilioAccessTokenAction, showOverlay } =props;

    const history = useHistory();

    const [show, setShow] = useState(true)
    const handleShow = () => setShow((preShow) => {
        return !preShow;
    })

    useEffect(() => {
        if (!identity || !roomId){
            // eslint-disable-next-line no-restricted-globals
            history.push("/");
        } else {
            // Pass setTwilioAccessTokenAction function to change the store state
            getTokenFromTwilio(setTwilioAccessTokenAction, identity);
        }
        },[]);

    return (
        <div className="room_container">

            {/* <ParticipantsSection /> */}
            <VideoSection handleShow={handleShow} />
            {show && <ChatSection />}
            {showOverlay && <Overlay />}
        </div>
    );
};

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        setTwilioAccessTokenAction: (token) =>
            dispatch(setTwilioAccessToken(token)),
    };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomPage);