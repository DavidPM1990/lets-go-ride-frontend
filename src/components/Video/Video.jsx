import ReactPlayer from "react-player"
import React from "react"

function Video() {
    return (
        <>
            <div className="videoApp" style={{ width: '100%', height: '100%', position: 'absolute' }}>

                <ReactPlayer
                    url='https://www.youtube.com/watch?v=xlUVr3rJ59A'
                    width='100%'
                    height='100%'
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














