import React from 'react';
import { Link } from 'react-router-dom';


class ArtistListCard extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render(data) {
        return (
            <>
                <div className="card col-3 mx-4 my-3 p-2">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={this.props.data.photo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.data.name}</h5>
                                <p className="card-text"><Link to={'/artist/' + this.props.data.id} className="btn btn-warning">En savoir plus ...</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    }

}

export default ArtistListCard;