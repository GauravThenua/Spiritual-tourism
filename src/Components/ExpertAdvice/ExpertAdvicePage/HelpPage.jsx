import React from 'react';
import './HelpPage.css';
import HelpPageCard from './ExpertPageCard/HelpPageCard';
import HelpFullData from '../../Data/HelpFullData'; 
import TempleCard from '../../EssentialGuide/ExpertAdvicePage/ExpertPageCard/TempleCard';

const HelpPage = () => {
  const HelpData = HelpFullData();
  return (

    <div className="expert-page-container">
    <div className="expert-page-heading">
    <h1>Events, Festivals and attraction of Ayodhya 🪔</h1>
    </div>
    <div className="ExpertPage-containers">
       {HelpData.map((place, index) => (
          <TempleCard
            key={index}
            name={place.name}
            img={place.img}
            about={place.about}
            wikipedia={place.wikiLink}
            Vid={place.VID}
          />
        ))}
    </div>
    </div>
  )
}


export default HelpPage;