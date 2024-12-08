import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Assuming your styles are in a separate CSS file

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleClicked = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="navbar-1">
      {mobile ? (
        <>
          <div className="symbol">|| Ayodhya Dham ||</div>
          <div className="toggle" onClick={toggleClicked}>
            <img
              src={toggle? "./images/icons/close.png" : "./images/icons/menu.png"}
              alt=""
              className="img-fluid"
              style={{ width: '30px', height: '30px'}}
            />
          </div>
        </>
      ) : (
        <>
          <div className="symbol">|| Ayodhya Dham ||</div>
          <div className="navLinks">
            <a href="#EssentialGuide">Ram Mandir Darshan</a>
            <a href="#events">Saryu Nadi Aarti</a>
            <a href="#events">Attraction and Events</a>
            <a href="#events">Explore</a>
            {/* <span className="d-inline-block">
              <img
                src="./images/icons/search.png"
                alt=""
                className="img-fluid"
                style={{ width: '30px', height: '30px' }}
              />
            </span> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
