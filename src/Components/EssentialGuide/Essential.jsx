import React from 'react';
import GuideCard from './GuideCards/GuideCard';
import './Essential.css';
import { Link } from 'react-router-dom';

const Essential = () => {
  return (
    <div className="EssentialGuide" id="EssentialGuide">
      <div className="EssentialG-Head">
        <div className="Head-1">
          <span>01 Shri <span style={{color: "orange"}}>Ram</span> Janambhumi Mandir 🚩</span>
          <div className="Essential-ViewMore">
            {/* <span>Essential Guide Updated Daily</span> */}
          </div>
        </div>
      </div>
      <div className="Essential-Container">
        <div className="guide-container">
          <GuideCard 
            images={[
              "./Images/Places/Temples/RamMandir/ramMandir.jpg",
              "./Images/Places/Temples/RamMandir/deputsavs.jpg",
              "./Images/Places/Temples/RamMandir/rammandir2.jpg"
            ]} 
            name={"Ram Janmbhumi"} 
            about={"Ram Janmbhumi, the birthplace of Lord Ram, is a highly revered site for Hindus."}
            wekipedia={"https://en.wikipedia.org/wiki/Ram_Janmabhoomi"}
          />
          <GuideCard 
            images={[
              "./Images/Places/Temples/Hanuman_Garhi/HanumanGarhiTemple.jpeg",
              "./Images/Places/Temples/Hanuman_Garhi/hanuman_garhi1.jpg",
              "./Images/Places/Temples/Hanuman_Garhi/hanuman_garhi2.jpg",
              "./Images/Places/Temples/Hanuman_Garhi/hanuman_garhi3.jpg"
            ]} 
            name={"Hanuman Garhi"} 
            about={"Hanuman Garhi is a temple dedicated to Lord Hanuman, situated in the heart of Ayodhya"}
            wekipedia={"https://en.wikipedia.org/wiki/Hanuman_Garhi"}
          />
          <GuideCard 
            images={[
              "./Images/Places/Temples/Kanak_Bhawan/Kanak_bhavan2.webp",
              "./Images/Places/Temples/Kanak_Bhawan/Kanak_bhavan.jpg",
              "./Images/Places/Temples/Kanak_Bhawan/kanak_bhavan1.jpg",
              "./Images/Places/Temples/Kanak_Bhawan/kanakBhavan.jpg"
            ]}
            name={"Kanak Bhawan"}
            about={"Kanak Bhawan is a temple dedicated to Lord Rama and Goddess Sita, located in Ayodhya, India."}
            wekipedia={"https://en.wikipedia.org/wiki/Kanak_Bhavan"}
          />
        </div>

        <Link to="/Temples">
          <button className="cta">
            <span>Continue</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Essential;
