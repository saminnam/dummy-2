import React from 'react';
import video from "../assets/videos/mission-video.mp4";

const Loader = () => {
  return (
   <section className='h-screen w-full flex justify-center items-center'>
    <video src={video} autoPlay muted playsInline></video>
   </section>
  )
}

export default Loader