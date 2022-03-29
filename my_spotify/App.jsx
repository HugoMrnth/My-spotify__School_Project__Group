import React, { createContext, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Albums from './composants/albums';
import SingleAlbum from './composants/singleAlbum';
import Header from './composants/Header';
import ArtistsListing from './composants/ArtistsLising'
import ArtistsPage from './composants/ArtistPage'
import HomePage from './composants/HomePage'
import GenreList from './composants/GenreList'
import GenreAlbum from './composants/GenreAlbum'
import { Player } from './composants/Player'
import Search from './composants/Search'

//export default Test;

const App = function () {

    let [playing, setPlaying] = useState();

    //setPlaying('lorem ipsum dolor sit amet');
    return (
        <Router>
            <Player.Provider value={{ playing: playing, setPlaying: setPlaying }}>
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomePage name="Home"/>} />

                    <Route path="genre" element={<GenreList />} />
                    <Route path="genre/:id" element={<GenreAlbum />} />


                    <Route path="search" element={<Search />} />


                    <Route path="artists" element={<ArtistsListing />} />
                    <Route path="artist/:id" element={<ArtistsPage />} />

                    <Route path="albums" element={<Albums name="Albums" />} />
                    <Route path="album/:id" element={<SingleAlbum />} />
                </Routes>
            </Player.Provider>
        </Router>
    )
}

export default App;