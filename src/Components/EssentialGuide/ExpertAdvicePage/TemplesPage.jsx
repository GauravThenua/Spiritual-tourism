import React from 'react';
import './TemplesPage.css';
import AboutPlace from '../../Data/AboutTemples';
import TempleCard from './ExpertPageCard/TempleCard';


const TemplesPage = () => {
  const placesData = AboutPlace();

  return (
    <div className="expert-page-container">
      <div className="Temple-expert-page-heading">Temples of Ayodhya</div>
      <div className="ExpertPage-container">
        {/* Mapping over placesData array and generating ExpertPageCard for each place */}
        {placesData.map((place, index) => (
          <TempleCard
            key={index} // Providing a unique key for each card
            name={place.name}
            img={place.img}
            about={place.about}
            wikipedia={place.wikiLink}
            Vid={place.VID}
            lat={place.lat}
            lng={place.lng}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplesPage;
