import React from 'react';
import './Fotter.css';
import { Link } from 'react-router-dom';

function Fotter() {
  return (
    <div className="Fotter">
        <div className="Fotter-Head">
            <ul>
                <a href="#Home"><li>Home</li></a>
                <a href="#Video-Container"><li>Ayodhya Dham Guide</li></a>
                <a href="#events"><li>Attractions</li></a>
                <a href="https://tornosindia.com/story-of-ayodhya/"><li>Stories</li></a>
            </ul>
        </div>
        <div className="Fotter-body">
            <h1>Ayodhya Dham</h1>
        </div>
        <div className="rights">
            © 2024 Ayodhya Dham Travel Guide developed by <a href="">Gaurav</a>.
        </div>
    </div>
  )
}

export default Fotter