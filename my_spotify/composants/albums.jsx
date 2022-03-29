import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import MyCard from './card';


class Albums extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            i: 0
        }
    }
    componentDidMount() {
        fetch('api/albums')
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
            
                    {this.state.cards.slice(this.state.i * 10, (10 * this.state.i) + 10).map(album => {
                        return <MyCard key={album.id} id={album.id} name={album.name} description={album.description} img={album.cover_small} tracks={album.track_count}/>
                    })}
                </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item" onClick={()=> this.state.i > 0 ? this.setState({i: --this.state.i}) : null}><a className="page-link">Previous</a></li>
                    <li className='page-item'><a className="page-link">{JSON.stringify(this.state.i)}</a></li>
                    <li className="page-item" onClick={()=> this.setState({i: ++this.state.i})}><a className="page-link">Next</a></li>
                </ul>
            </nav>
            </div>
    }
}

export default Albums