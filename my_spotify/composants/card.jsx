import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyCard extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return <div className="card col-3 mx-4 my-3 p-2">
            <img src={this.props.img} className="card-img-top" alt={this.props.name} />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className='card-text'>Tracks: {this.props.tracks}</p>
          <p className="card-text">{this.props.description.substr(0, 150)}..</p>
          <Link to={'../album/' + this.props.id} className='btn btn-warning'>Voir plus</Link>
        </div>
      </div>
    }
}


export default MyCard;