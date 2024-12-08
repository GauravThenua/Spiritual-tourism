import React from 'react';
import './BestPlacePages.css';
import BPP from './BestPlacePageCard/BPP';
import AboutPlace from '../../Data/AboutPlace';

const BestPlacePage = () => {
  const placesData = AboutPlace();
  return (
    <div className="bestPlace-container">
        <div className="body-heading">
            <span>Some of the best Places in Ayodhya 🍀</span>
        </div>
         <div className="Best-Places-body">
            {placesData.map((place, index) => (
          <BPP
            key={index} // Providing a unique key for each card
            name={place.name}
            img={place.img}
            about={place.about}
            wekipedia={place.wekipedia}
            Vid={place.VID}
            lat={place.lat}
            lng={place.lng}
          />
        ))}     </div>
    </div>
  )
}

export default BestPlacePage;