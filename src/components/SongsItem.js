import React from 'react'

const SongsItem = ({song}) => {

    const name = song.title.label
    const imgUrl = song["im:image"][2].label
        
    return(
        <div>
            <li>{name}</li>
            <img src={imgUrl} alt="track image"></img>
        </div>
    )
    
}

export default SongsItem