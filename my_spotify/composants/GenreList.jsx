import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import GenreCard from './GenreCard';


class GenreList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            
        }
    }
    componentDidMount() {
        fetch('api/genre')
        .then( reponse => {
            return reponse.json()
        }).then( json => {
            console.log(json)
            this.setState({cards: json})
        })
    }
    render() {
        return <div className='m-5'>
            <h1>{this.props.name}</h1>
                <div className="row d-flex justify-content-between">
                    {this.state.cards.map(album => {
                        return <GenreCard key={album.id} id={album.id} name={album.name} />
                    })}
                </div>
            
            </div>
    }
}

export default GenreList;