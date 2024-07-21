import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
// import video from '../../assets/video.mp4'
import Show from '../show/show.jsx'
import { useRef } from 'react'

const Contact = () => {
  // const VideoPlay = useRef(null)
  // function play(){
  //   if(VideoPlay.current){
  //   VideoPlay.current.play()
  //   }
  // }

  // function pause(){
  //   if(VideoPlay.current){
  //   VideoPlay.current.pause()
  //   }
  // }

  const [show, isshow] = useState(false);
 
  return (
    <>
      <Navbar />
      {/* <div className="layout_page">
    <div><h1>Contact</h1></div>
    <video src={video} ref={VideoPlay} width={600}  ></video>
    <button onClick={play}>play</button>
    <button onClick={pause}>pause</button>
    </div> */}

      <div>
        {/* <span>{counter}</span> */}
      </div>
      <Show/>
      <button onClick={() => isshow(!show)}>{show ? "show " : "show more"}</button>
    </>
  )
}

export default Contact