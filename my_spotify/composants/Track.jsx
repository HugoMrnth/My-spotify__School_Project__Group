import React, { useContext } from 'react';
import { Player } from './Player';


const Track = function(prop)
{
    const {playing, setPlaying} = useContext(Player);

    return(
        <div>
            <li key={prop.data.track_name}><button className='btn' onClick={() => setPlaying(prop.data.src)}><i className="fa fa-play" aria-hidden="true"></i></button>{prop.data.track_name}</li>
        </div>
    )
}

export default Track;