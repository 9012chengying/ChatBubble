import React from 'react';
import { connect } from 'react-redux';

//only want to return the name after the code so slice to split.
const SingleParticipant = ({identity, lastItem}) => {
    const getParticipantName = (identity) => {
        return identity.slice(36, identity.length);
    }

    return(
        <>
            <p className="participants_paragraph">{getParticipantName(identity)}</p>
            {!lastItem&& <span className="participants_separator_line"></span>}
        </>
    );
};


const Participants = ({ participants }) => {
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

//for list of participants to display.
const mapStoreStateToProps = (state) => {
    return {
        ...state,
    };
};

//should export the participants from the store.
export default connect(mapStoreStateToProps)(Participants);