import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import MyCard from './card';


class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            
        }
    }
    componentDidMount() {
        fetch('api/home')
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
                        return <MyCard key={album.id} id={album.id} name={album.name} description={album.description} img={album.cover_small} tracks={album.track_count}/>
                    })}
                </div>
            
            </div>
    }
}

export default HomePage;