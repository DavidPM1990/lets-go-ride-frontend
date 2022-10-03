import ReactPlayer from "react-player"
import React from "react"

function Video() {
    return (
        <>
            <div className="videoApp" style={{ width: '100%', height: '100%', position: 'absolute' }}>

                <ReactPlayer
                    url='https://www.youtube.com/watch?v=rMuJM51AmJc'
                    width='50%'
                    height='50%'
                    controls
                    playing
                    loop
                    muted
                />
            </div>
        </>
    )
}

export default Video
