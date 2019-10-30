import React from 'react'
import '../App.css';

const SongsItem = ({song}) => {

    const name = song.title.label
    const imgUrl = song["im:image"][2].label
        
    return(
        <div className="song-item">
            <li>{name}</li>
            <img src={imgUrl} alt="track image"></img>
        </div>
    )
    
}

export default SongsItem