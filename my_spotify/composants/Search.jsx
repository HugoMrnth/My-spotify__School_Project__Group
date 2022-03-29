import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Track from './Track';


const Search = function (prop) {

    let [pagination, setPage] = useState(0);

    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);
    const [max, setMax] = useState(1000);

    const [genre, setGenre] = useState([]);
    const [genrefilter, setGenreFilter] = useState([]);


    useEffect(async () => {

        let resp = await fetch('/api/search')
        let json = await resp.json();

        setSearch(json);
        setFilter(json)



        let genres_req = await fetch('/api/genre')
        let genre_json = await genres_req.json();

        setGenre(genre_json);
    }, [])

    function FilterCall(event) {
        let filter = event.target.value;
        setFilter(
            search.filter((entry) => {
                return entry.album.match('^.*' + filter + '.*$') || entry.artist.match('^.*' + filter + '.*$') ||  entry.genre.match('^.*' + filter + '.*$') ;
            })
        )

        setMax(filter.length / 25)
    }

    return (
        <>
            <div className="container">
                <div className="p-3">
                    <div className="form-inline">
                        <input onChange={(event) => FilterCall(event)} type="text" className='form-control' id="" />

                    </div>
                </div>

                <ul>
                    {filter.slice(25 * pagination, (25 * pagination) + 25).map((element, i) => {
                        return (
                            <li key={i}>
                                <ul style={{ listStyle: 'none', display: 'flex', width: '100%' }}>
                                    <li style={{ width: '33%' }}><Link to={`/album/${element.album_id}`}>{element.album}</Link></li>
                                    <li style={{ width: '33%' }}><Link to={`/artist/${element.artits_id}`}>{element.artist}</Link></li>
                                    <li style={{ width: '33%' }}>{element.genre}</li>

                                </ul>
                            </li>
                        )
                    })}
                </ul>

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item" onClick={() => pagination > 0 ? setPage(--pagination) : 0}><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">{pagination}</a></li>
                        <li className="page-item" onClick={() => pagination < (1 - max) ? setPage(++pagination) : pagination}><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Search;