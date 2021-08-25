import React, { Component } from "react";
import Participant from './Participant';
import { setParticipants } from '../../../store/actions';
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

    componentDidMount() {
        this.props.room.on('participantConnected', (participant) =>
            this.addParticipant(participant)
        );

        this.props.room.on('participantDisconnected' , (participant) => {
            this.removeParticipant(participant);
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

    //Removing participants from store when they leave.
    //Checks to find the participant to remove.
    removeParticipantFromStore(participant) {
        const participants = store.getState().participants.filter(p => p.identity !== participant.identity);
        store.dispatch(setParticipants(participants));
    }

    //When participant join will console log the person joining.
    //Will set state for that person.
    addParticipant(participant) {
        console.log('${participant.identity} has joined the room');
        this.addParticipantToStore(participant);

        this.setState({
            remoteParticipants: [...this.state.remoteParticipants, participant],
        });
    }

    //When leaving will set state for that person.
    //Again loops through to find correct person.
    removeParticipant(participant) {
        console.log('${participant.identity} has left the room');
        this.removeParticipantFromStore(participant);
        this.setState({
            remoteParticipants: this.state.remoteParticipants.filter((p) => p.identity !== participant.identity),
        })
    }

    //render page.
    //divs for each participant made for video
    render() {
        return(
            <div className='room'>
                <div className='participants'>
                    <Participant key={this.props.room.localParticipant.identity} localParticipant participant={this.props.room.localParticipant} />
                    {this.state.remoteParticipants.map((participant) => {
                        <Participant key={participant.identity} participant={participant} />;
                    })}
                </div>
            </div>
        );
    }
}

export default TwilioRoom;