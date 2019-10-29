import React from 'react';
import SongsItem from './SongsItem'

const SongsList = (props) => {
        const songsNodes = props.songs.map((song, index) => {
            return (
                <SongsItem song={song} key={index} />
            )
        })

        return(
            <div>
                <h2>Top 20 Songs in UK </h2>
                <ol>
                    {songsNodes}
                </ol>
            </div>
        )
    
}

export default SongsList;