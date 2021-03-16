
import ReactPlayer from "react-player/youtube"



import React from 'react'

const VideoPlayer1 = () => {
    return (
        <div className = "player-wrapper" >
            <ReactPlayer className = "react-player"
            url="https://www.youtube.com/watch?v=oBp22Jiv4kw"
            width="75%"
            height = "75%"
            controls = {true}
            />
            
        </div>
    )
}

export default VideoPlayer1