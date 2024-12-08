import React, { useEffect } from 'react';
import './Expert.css';
import ExpertC from './ExpertCard/ExpertC';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

const Expert = () => {
  useEffect(() => {
    ScrollReveal().reveal('.Explore-Body-1', {
      origin: 'bottom',
      delay: 500,
      distance: '100px',
      easing: 'ease-in-out',
      duration: 1000,
    });

    ScrollReveal().reveal('.Explore-Heading', {
      origin: 'left',
      delay: 500,
      distance: '100px',
      easing: 'ease-in-out',
      duration: 1000,
    });
  }, []);

  const size = window.innerWidth;
  return (
    <div className="Explore-Container" id="events">
      <div className="Explore-Heading">
        <span>03 Guidance</span>
        <h2 className="Typing-text">Events, Festivals and center of attraction of Ayodhya.</h2>
      </div>
      <div className="Explore-Body">
        <div className="Explore-Body-1">
          {size >= 1005 ? (
            <>
              <ExpertC height={300} width={500} boxHeight={250} imgSrc={'./Images/Events/deeputsav.webp'} title={'Deeputsav'} />
              <ExpertC height={250} width={400} boxHeight={250} imgSrc={'./Images/Events/ramnavmi.webp'} title={'Ram navmi'} />
            </>
          ) : (
            <>
              <ExpertC height={100} width={150} boxHeight={100} imgSrc={'./Images/Events/deeputsav.webp'} title={'Deeputsav'} />
              <ExpertC height={100} width={150} boxHeight={100} imgSrc={'./Images/Events/ramnavmi.webp'} title={'Ram navmi'} />
            </>
          )}
          <Link to="/HelpPage">
            <button className="cta">
             <span>View More</span>
             <svg width="15px" height="10px" viewBox="0 0 13 10">
               <path d="M1,5 L11,5"></path>
               <polyline points="8 1 12 5 8 9"></polyline>
             </svg>
           </button>
          </Link>
        </div>
        <div className="Explore-Body-2">
          {size >= 1005 ? (
            <>
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/Events/dewali.jpg'} title={'Dewali'} />
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/Events/Hanuman-Jayanti2.jpg'} title={'Hanuman Jayanti'} />
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/Events/saryuaarti.jpeg'} title={'Saryu Aarti'} />
            </>
          ) : (
            <>
              <ExpertC height={90} width={130} boxHeight={90} imgSrc={'./Images/Events/Hanuman-Jayanti2.jpg'} title={'Hanuman Jayanti'} />
              <ExpertC height={90} width={130} boxHeight={90} imgSrc={'./Images/Events/saryuaarti.jpeg'} title={'Saryu Aarti'} />
              <ExpertC height={90} width={130} boxHeight={90} imgSrc={'./Images/Events/kartikpurnima.jpg'} title={'Kartik Purnima'} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Expert;
