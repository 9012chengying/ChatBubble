import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const VideoTrack = ({ track }) => {
    const trackRef = useRef();

    //to add track
    //track.attach, adds the video or audio to the html element.
    useEffect(() => {
        const child = track.attach();
        trackRef.current.classList.add(track.kind);
        trackRef.current.appendChild(child);

        const videosPortal = document.getElementById('videos_portal');

        //for styling of many video pictures
        if (!videosPortal.classList.contains('videos_portal_styles')) {
            videosPortal.classList.add('videos_portal_styles');
        }
    }, []);

    //name is for the video containers
    //ref set to the track kind
    const content = (
        <div className='video_track_container'>
            <div ref={trackRef}></div>
        </div>
    );

    return ReactDOM.createPortal(content, document.getElementById('videos_portal'));
};

export default VideoTrack;