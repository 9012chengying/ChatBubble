import React from 'react';

const SingleParticipant = ({identity, lastItem}) => {
    const getParticipantName = (identity) => {
        return identity;
    }

    return(
        <>
            <p className="participants_paragraph">{getParticipantName(identity)}</p>
            {!lastItem&& <span className="participants_separator_line"></span>}
        </>
    );
};

const participants = [
    {
        identity: "Nikolas",
    },
    {
        identity: "Mary",
    },
    {
        identity: "Bill",
    },
    {
        identity: "Mark",
    },
];

const Participants = () => {
    return (
        <div className='participants_container'>
            {participants.map((participant, index) => {
                return <SingleParticipant
                            key = {participant.identity}
                            identity = {participant.identity}
                            lastItem = {participant.length ===index +1}>
                        </SingleParticipant>;
            })}
        </div>
    );
};

export default Participants;