import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoidGlyYW5vNjEiLCJhIjoiY2xxZHNlMzJlMGdqeDJpcHJnM3dyYzhtNiJ9.OmGDZ-UGyy1PT4QmTy5xdQ';

if(!navigator.geolocation){
  alert( 'Tu navegador no tiene acceso a Geolocalización');
  throw new Error("Tu navegador no tiene acceso a Geolocalización");
  
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);


