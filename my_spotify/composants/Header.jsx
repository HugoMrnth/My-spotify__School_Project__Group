import ReactDOM from 'react-dom';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import {Player} from '../Context/Player';
import { Player } from './Player'
import MusicPlayer from './MusicPlayer';

const Header = function () {

    //let { test } = useContext(TestContext);
    const { playing, setPlaying } = useContext(Player);

    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">My Spotify</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="search">Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="genre">Genre</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link" to="albums">Albums</Link>
                </li>

                <li className='nav-item'>
                    <Link className="nav-link" to="artists">Artists</Link>
                </li>
            </ul>
                <MusicPlayer />

        </div>
    </nav>)

}

export default Header;