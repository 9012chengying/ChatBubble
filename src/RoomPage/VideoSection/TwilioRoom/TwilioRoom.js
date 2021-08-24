import React, { Component } from "react";
import { store } from '../../../store/store';


class TwilioRoom extends Component {
    //Sets constructor for the participants to be looked at.
    //For each participant will execute addParticipantToStore().
    constructor(props) {
        super(props);

        const remoteParticipants = Array.from(
            this.props.room.participants.values()
        );

        this.state = {
            remoteParticipants: remoteParticipants
        };

        remoteParticipants.forEach((participant) => {
            this.addParticipantToStore(participant)
        });
    }

    //Adding a participant within the room to the store.
    //Only if not already there.
    //Else is added/pushed to the store as a new participant.
    addParticipantToStore(participant) {
        const participants = store.getState().participants;
        if (participants.find((p) => p.identity === participant.identity)) {
            return;
        } else {
            const newParticipants = [...participants];
            newParticipants.push({ identity: participant.identity });
            store.dispatch(setParticipants(newParticipants));
        };

    }
}