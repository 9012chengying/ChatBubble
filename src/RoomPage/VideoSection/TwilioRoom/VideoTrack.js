import React, { useRef, useEffect } from 'react';

const VideoTrack = ({ track} ) => {
    const trackRef = useRef();

    //to add track
    //track.attach, adds the video or audio to the html element.
    useEffect(() => {
        const child = track.attach();
        trackRef.current.classList.add(track.kind);
        trackRef.current.appendChild(child);
    }, []);

    //name is for the video containers
    //ref set to the track kind
    return (
        <div className='video_track_container' ref={trackRef}>

        </div>
    )
};

export default AudioTrack;