import React from "react";
import ChatLabel from "./ChatLabel";
import Messages from "./Messages";
import NewMessage from "./NewMessage";
import ParticipantsLabel from "../ParticipantsSection/ParticipantsLabel";
import Participants from "../ParticipantsSection/Participants";

const ChatSection = () => {
    return(
        <div className="chat_section_container">
            <div className="participants_section_container">
                <ParticipantsLabel></ParticipantsLabel>
                <Participants></Participants>
            </div>
            <ChatLabel></ChatLabel>
            <Messages></Messages>
            <NewMessage></NewMessage>
        </div>
    );
};

export default ChatSection;