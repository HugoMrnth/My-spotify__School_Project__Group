import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArtistListCard from './ArtistsListCard';

class ArtistsListing extends React.Component {

    constructor(prop) {
        super(prop);

        this.state = {
            data: [],
            i: 0
        }
    }

    componentDidMount() {
        fetch('/api/artists')
            .then(resp => {
                return resp.json();
            }).then(json => {
                this.setState({ data: json });
                console.log(json);
            })
    }

    render() {
        return (
            <div className='container m-5'>

                    <div className="col-2"></div>
                        <h1>
                            Nos artistes ({this.state.data.length})
                        </h1>
                    <div className="row d-flex justify-content-between">


                        {this.state.data.slice(this.state.i * 10, (10 * this.state.i) + 10).map((artist, i) => {
                            return <ArtistListCard data={artist} />
                        })}
                    </div>

                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item" onClick={() =>  this.state.i > 0 ? this.setState({ i: --this.state.i }): null} ><a className="page-link" href="#">Previous</a></li>
                            <li className='page-item'><a className="page-link">{JSON.stringify(this.state.i)}</a></li>
                            <li className="page-item" onClick={() => this.setState({ i: ++this.state.i })} ><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                <div className="col-2"></div>

            </div>
        )
    }
}

export default ArtistsListing