import axios from "axios";




const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params:{
    limite: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoidGlyYW5vNjEiLCJhIjoiY2xxZHNlMzJlMGdqeDJpcHJnM3dyYzhtNiJ9.OmGDZ-UGyy1PT4QmTy5xdQ',

  }
});


export default searchApi;






