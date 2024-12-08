import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Map() {

  const location = useLocation();
  const name =location.state.name;
  const X = location.state.lat;
  const Y = location.state.lng;
  
  console.log("in map Latitude:", X);
  console.log("Longitude:", Y);


  console.log(name);
  useEffect(() => {
    initMap();
  }, []);

  const initMap = () => {
    const myLatLng = { lat: parseInt(X), lng: parseInt(Y)};

    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });

    new window.google.maps.Marker({
      position: myLatLng,
      map: map
    });

    map.panTo(myLatLng);
  };

  return (
    <div id="map" style={{ width: '100%', height: '100vh' }}></div>
  );
}

export default Map;
