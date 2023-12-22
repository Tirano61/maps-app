
import axios from "axios";




const directionApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params:{
    alternatives: false,
    geometries: 'geojson',
    overview: 'full',
    steps: false,
    access_token: 'pk.eyJ1IjoidGlyYW5vNjEiLCJhIjoiY2xxZHNlMzJlMGdqeDJpcHJnM3dyYzhtNiJ9.OmGDZ-UGyy1PT4QmTy5xdQ',

  }
});


export default directionApi;