import ReactDOM from 'react-dom';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Player } from './Player';
import Track from './Track';
const AlbumCard = function (props) {

  return (<div className="card mb-3 w-75 m-auto">
    <div className="row">
      <img src={props.img} className="img-fluid rounded-start w-25 h-100" alt={props.name} />

      <div className="col-md-8">
        <div className="card-body w-100">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text">{props.description}</p>
          <div className='d-flex'>
            <p className="card-text">Release date: <small className="text-muted">{props.release}</small></p>
            <p className="card-text mx-4">Genre : <small className="text-muted">{props.genre}</small></p>
          </div>
          <h3 className='mt-5'>Tracks</h3>
          <ol className='mt-3'>
            {props.tracks.map(item => {
              return <Track data={item} />
            })}
          </ol>
          {/* {this.props.mp3.map(item => {
                return <audio key={item} controls><source src={item} /></audio>
                // return <p key={item}>{item}</p>
              })} */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default AlbumCard;
