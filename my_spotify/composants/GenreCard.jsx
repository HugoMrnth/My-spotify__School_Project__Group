import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class GenreCard extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return <div className="card col-3 mx-4 my-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <Link to={'../genre/' + this.props.id} className='btn btn-warning'>Voir les albums du genre</Link>
        </div>
      </div>
    }
}

export default GenreCard;