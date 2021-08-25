import React, { useRef, useEffect } from 'react';

const AudioTrack = () => {
    const trackRef = useRef();

    //track.attach, adds the video or audio to the html element.
    useEffect(() => {
        const child = track.attach();
        trackRef.current.classList.add(track.kind);
        trackRef.current.appendChild(child);
    }, []);

    return (
        <div className='track' ref={trackRef}>

        </div>
    )
};

export default AudioTrack;