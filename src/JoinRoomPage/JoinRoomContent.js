import React , {useState} from 'react';
import {connect} from "react-redux";
import JoinRoomInputs from "./JoinRoomInputs";
import {setConnectOnlyWithAudio} from "../store/actions";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";
import RoomNotFoundMessage from "./RoomNotFoundMessage";
import JoinRoomButtons from "./JoinRoomButtons";

const JoinRoomContent = (props) => {
    const { isRoomHost,setConnectOnlyWithAudioAction, connectOnlyWithAudio} =
 props;
    const [roomIdValue, setRoomIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);

    const handleJoinToRoom = () =>{
        //add logic to join a room
    };

    return (
        <>
            <JoinRoomInputs
                roomIdValue = {roomIdValue}
                setRoomIdValue = {setRoomIdValue}
                nameValue = {nameValue}
                setNameValue = {setNameValue}
                isRoomHost = {isRoomHost}
                />
            <OnlyWithAudioCheckbox
                setConnectOnlyWithAudio={setConnectOnlyWithAudioAction}
                connectOnlyWithAudio={connectOnlyWithAudio}
            />
            <RoomNotFoundMessage showRoomNotFoundMessage={showRoomNotFoundMessage} />
            <JoinRoomButtons
               isRoomHost={isRoomHost}
               handleJoinToRoom={handleJoinToRoom}
               />
            </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setConnectOnlyWithAudioAction:(onlyWithAudio) =>
            dispatch(setConnectOnlyWithAudio(onlyWithAudio))
    };
}

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomContent);