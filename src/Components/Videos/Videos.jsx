import React from 'react';
import './Videos.css';
import VideoC from './VideoC/VideoC';

function Videos() {
  return (
    <div className="Video-Container" id="Video-Container">
        <div className="Video-Head">
            <h2>Videos from Ayodhya</h2>
            <span>This section is dedicated to some wonderful content creators and devotees who are passionately sharing the essence of Ayodhya through their videos.</span>
        </div>
        <div className="Videos-Body">
          <VideoC vId={'HPcWQG2yGlE'} title={"Ayodhya Darshan"} about={"Embark on a spiritual journey through the heart of Ayodhya, temples, rich history, Travel, Importance and more."}/>
          <VideoC vId={'MHQdFG62rGw'} title={"Ayodhya Darshan Guide"} about={"Planning your visit to Ayodhya? this video help you for invaluable tips and insights to ensure a comfortable and memorable experience."}/>
          <VideoC  vId={'KEs9sPq0X04'} title={"Ayodhya Complete Darshan Guide"} about={"Discover Ayodhya in all its glory with this complete darshan guide. this video promises to unveil the essence of Ayodhya like never before."}/>
        </div>
    </div>
  )
}

export default Videos;
