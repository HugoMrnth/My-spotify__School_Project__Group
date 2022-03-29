import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const ArtistCard = function (prop) {
    const [toggle, setToggle] = useState(false);

    return (
        <>

            <div className="card text-center">
                <div className="card-header">
                    <img src={prop.data.photo} height='400' />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{prop.data.name}</h5>
                    <div style={ toggle == false ?{ height: 200, overflow: 'hidden' }: null}>
                        <p className="card-text" >
                            {prop.data.bio}
                        </p>
                    </div>
                    <a  className="dark-link" onClick={()=> setToggle(!toggle)}>Voir { toggle ?'moins' : 'plus'} </a>

                </div>
            </div>

        </>
    )
}


export default ArtistCard