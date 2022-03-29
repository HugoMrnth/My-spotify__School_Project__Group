import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ArtistCard from './ArtistCard';
import ArtistAlbum from './ArtistAlbum';

const ArtistsPage = function (props) {

    const [data, setData] = useState({name: 'Loading...'});
    const [albums, setAlbums] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch('/api/artist/' + id, {
            method: 'GET'
        }).then(resp => {
                return resp.json()
        }).then(json => {
            setData(json[0])
        });

        fetch(`/api/artist/${id}/albums`, {
            method: 'GET'
        }).then(resp => {
                return resp.json()
        }).then(json => {
            setAlbums(json)
        });


    }, [])

    console.log(data);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <ArtistCard  data={data}/>
                    <ArtistAlbum album={albums}/>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    )
}


export default ArtistsPage