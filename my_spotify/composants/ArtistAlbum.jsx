import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ArtistAlbum = function (prop) {
    let albums = prop.album;
    //alert(typeof albums);
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Album</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(albums).map(e => {
                        return <tr><Link to={'/album/' + albums[e].album_id}>{albums[e].album}</Link></tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
export default ArtistAlbum