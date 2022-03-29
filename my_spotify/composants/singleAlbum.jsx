import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import AlbumCard from './singleAlbumCard';
import { useParams } from 'react-router-dom';



const SingleAlbum = function (props) {
    const { id } = useParams()
    const [data, setData] = useState({ hits: [] })
    const [track, setTrack] = useState([])
    const [mp3, setMp3] = useState([])
    useEffect(() => {
        fetch('/api/album/' + id)
            .then(reponse => {
                return reponse.json()
            }).then(json => {
                console.log(json)
                setData(json[0])
                let tempTrack = new Array()
                for (let info in json) {
                    tempTrack.push({ track_name: json[info]['track_name'], src: json[info]['mp3'] })
                }
                // console.log(tempMp3)
                setTrack(tempTrack)
                //setMp3(tempMp3)
                console.log(track)
            })

    }, [])


    return (<div className='m-5'>
        <div>
            {/* {JSON.stringify(mp3)} */}
            <AlbumCard data={data} name={data.name} img={data.cover_small} description={data.description} release={data.release_date} genre={data.genre_name} tracks={track} />
        </div>
    </div>)
}

export default SingleAlbum;