import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import GenreAlbumCard from './GenreAlbumCard';
import { useParams } from 'react-router-dom';

const GenreAlbum = function (props) {
    const { id } = useParams()
    let [i, setI] = useState(0)
    const [data, setData] = useState([])
    const [genre, setGenre] = useState()
    const [jsonlength, setLength] = useState()
    useEffect(() => {
        fetch('/api/genre/' + id)
            .then(reponse => {
                return reponse.json()
            }).then(json => {
                console.log(json)
                console.log(json[0]['genre_name'])
                console.log(json.length / 10)
                setData(json)
                setGenre(json[0]['genre_name'])
                setLength(json.length / 10)
            })
            
        }, [])
        
        
        return (<div className='m-5'>
        <h1>{genre}</h1>
        <div className="row d-flex justify-content-between">
            {data.slice(i * 10, (10 * i) + 10).map(album => {
                return <GenreAlbumCard key={album.album_id} id={album.album_id} name={album.name} description={album.description} img={album.cover_small}/>
            })}
        </div>
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className="page-item" onClick={()=>  i > 0 ? setI( --i) : null}><a className="page-link">Previous</a></li>
            <li className='page-item'><a className="page-link">{JSON.stringify(i)}</a></li>
            <li className="page-item" onClick={()=> i < jsonlength - 1 ? setI(++i) : null}><a className="page-link">Next</a></li>
        </ul>
    </nav>
    </div>)
}

export default GenreAlbum;