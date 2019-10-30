import React from 'react';
import SongsItem from './SongsItem'
import '../App.css';

const SongsList = (props) => {
        const songsNodes = props.songs.map((song, index) => {
            return (
                <SongsItem song={song} key={index} />
            )
        })

        return(
            <div className='song-list'>
                <h2>Top 20 Songs in UK </h2>
                <div className='songs'>
                    <ol>
                        {songsNodes}
                    </ol>
                </div>    
            </div>
        )
    
}

export default SongsList;