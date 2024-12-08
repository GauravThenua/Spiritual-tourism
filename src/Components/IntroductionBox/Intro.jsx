import React from 'react';
import './Intro.css';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Intro = () => {


  useEffect(()=>{
    ScrollReveal().reveal('.Welcome-Img', {
      origin: 'center',
      delay: 500,
      easing: 'ease-in-out',
      duration: 1000
    });

    ScrollReveal().reveal('.Content-Overlay h1', {
      origin: 'left',
      delay: 500,
      distance: '100px',
      easing: 'ease-in-out',
      duration: 1000
    });

    ScrollReveal().reveal('.OverLays-box', {
      origin: 'bottom',
      delay: 500,
      distance: '100px',
      easing: 'ease-in-out',
      duration: 1000
    });
  },[])

  return (
    <div className="Welcome-Page" id="Home">
      <div className="Intro-Container">
        <img src="./Images/RamMandir.jpg" className="Welcome-Img" alt=""/>
        <div className="Content-Overlay">
            <h1>Your Ayodhya<br /> Dham Visit Guide</h1>
            <div  className="OverLays-box">
                <span>Ram Mandir Aarti Booking Guide</span>
                <span>Ram Mandir Darshan Booking Guide</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Intro;
