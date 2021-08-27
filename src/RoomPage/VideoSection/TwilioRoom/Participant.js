import React, { Component } from 'react';
import AudioTrack from './AudioTrack';
import VideoTrack from './VideoTrack';
import {addMessageToMessenger} from "../../../utils/twilioUtils";

//Getting the audio and video tracks
//mounting for tracks

class Participant extends Component {
    constructor(props) {
        super(props);

        const existingPublications = Array.from(
            this.props.participant.tracks.values()
        );

        const existingTracks = existingPublications.map(
            (publication) => publication.track
        );

        const nonNullTracks = existingTracks.filter((track) => track !== null);

        this.state = {
            tracks: nonNullTracks,
        };
    }
    componentDidMount() {
        //if not the local user so we can pass the camera of the user to this
        if (!this.props.localParticipant) {
            this.props.participant.on("trackSubscribed", (track) => {
                if (track.kind === "data") {
                    /// add  chat logic
                    track.on('message', (data)=> {
                        addMessageToMessenger(JSON.parse(data));
                    });

                } else {
                    this.addTrack(track);
                }
            });

            this.props.participant.on("trackUnpublished", (track) => {
                this.removeTrack(track);
            });
        }
    }

    //add track to list of tracks. only if track not null/
    addTrack(track) {
        if (track) {
            this.setState({
                tracks: [...this.state.tracks, track],
            });
        }
    }

    //same for remove
    removeTrack(track) {
        if (track) {
            const newTracks = this.state.tracks.filter(
                (t) => t.name !== track.trackName
            );

            this.setState({
                tracks: newTracks,
            });
        }
    }

    //html render
    //splits tracks based on kind.
    render() {
        return(
            <div className='participant' id={this.props.participant.identity}>
                {this.state.tracks.map((track) => {
                    if (track.kind === 'audio') {
                        return (<AudioTrack key={track} track={track} />);
                    }
                    if (track.kind === 'video') {
                        return (<VideoTrack key={track} track={track} />);
                    }
                })}
            </div>
        )
    };
}

export default Participant;