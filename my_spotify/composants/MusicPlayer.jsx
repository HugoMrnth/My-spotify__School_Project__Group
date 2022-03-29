import React, { useContext } from 'react';
import { Player } from './Player'


const MusicPlayer = function (prop) {
    const { playing, setPlaying } = useContext(Player);

    return (
        <div>
            <audio
                autoPlay
                controls
                src={playing}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
    )
}

export default MusicPlayer;