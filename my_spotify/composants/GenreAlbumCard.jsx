import ReactDOM from 'react-dom';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Player } from './Player';
import Track from './Track';
const GenreAlbumCard = function (props) {

  return (<div className="card col-3 mx-4 my-3 p-2">
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {/* <p className='card-text'>Tracks: {this.props.tracks}</p> */}
        <p className="card-text">{props.description.substr(0, 150)}..</p>
        <Link to={'../album/' + props.id} className='btn btn-warning'>Voir plus</Link>
        </div>
    </div>
  )
}

export default GenreAlbumCard;
