import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './PlaceDesc.css';
import {useState} from 'react';
import BPC from './BestPlaceCard/BPC';
import { Link } from 'react-router-dom';

const CityDesc = () => {

  const [animationsInitialized, setAnimationsInitialized] = useState(false);

  useEffect(() => {
    if (!animationsInitialized) {
      ScrollReveal().reveal('.city-image-1, .city-image-2', {
        origin: 'bottom',
        delay: 500,
        distance: '100px',
        easing: 'ease-in-out',
        duration: 1000
      });

      ScrollReveal().reveal('.city-description,.cityDesc-Heading', {
        origin: 'left',
        delay: 500,
        distance: '100px',
        easing: 'ease-in-out',
        duration: 1000
      });

      setAnimationsInitialized(true);
    }
  }, [animationsInitialized]);


  return (
    <div className="City-Box">
      <div className="cityDesc-Heading">
        <h2>02 Guidance</h2>
        <span>Some of the best Places in Ayodhya.</span>
      </div>
      <div className="Best-Places">
           <BPC imgSrc={'./Images/Places/RelaxPlace/ramKiPaidi.jpg'} title={'Ramki Paidi'} about={'Ram ki paidi. This place is known for its serene atmosphere and is located on the banks of the river. It is a popular spot for devotees to take holy dips and offers a beautiful view of the surrounding landscape.'}/>  
           <BPC imgSrc={'./Images/Places/RelaxPlace/guptarGhat.jpg'} title={'Guptar ghat'} about={'Guptar Ghat. This ancient ghat holds historical significance and is believed to be the spot where a great sage once meditated. Visitors can experience the spirituality of the place and enjoy the peaceful surroundings.'}/>   
          <BPC imgSrc={'./Images/Places/RelaxPlace/militaryTemple.jpg'} title={'Military temple'} about={'Military temple. This temple is dedicated to the soldiers who sacrificed their lives for the nation. It stands as a symbol of courage.'}/> 
      </div>
      <div className="ViewMore">
        <Link to="/SomePlaces">
          <button className="cta">
             <span>Read More</span>
             <svg width="15px" height="10px" viewBox="0 0 13 10">
               <path d="M1,5 L11,5"></path>
               <polyline points="8 1 12 5 8 9"></polyline>
             </svg>
           </button>
        </Link>
      </div>
    </div>
  );
};

export default CityDesc;
