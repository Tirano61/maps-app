


import React, { useContext, useState } from 'react'
import { MapContext, PlacesContext } from '../context'
import { LoadingPlaces } from './LoadingPlaces';
import { Feature } from '../interfaces/places';
import { start } from 'repl';

export const SearchResults = () => {

  const { isLoadingPlaces, places, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoinds } = useContext(MapContext);

  const [activeId, setActiveId] = useState('');


  const onPlaceClick = ( place: Feature ) => {
    const [lng, lat ] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [ lng, lat]
    })
  }

  const getRoute = ( place: Feature ) =>{

    if ( !userLocation ) return;

    const [ lng, lat ] = place.center;

    getRouteBetweenPoinds( userLocation, [ lng, lat ] );
  }

  if ( isLoadingPlaces ) {
    return (
      <LoadingPlaces />
    );
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className='list-group mt-3'>
      {
        places.map( place =>(
          <li
            key={ place.id } 
            className={`list-group-item list-group-item-action pointer ${(activeId === place.id ) && 'active' }`}
            onClick={ () => onPlaceClick( place ) }
          >
            <h6>{ place.text_es }</h6>
            <p 
              
              style={{
                fontSize: '12px'
              }}
            >
              { place.place_name_es }
            </p>
            <button 
              onClick={ () => getRoute( place ) }
              className={`btn btn-sm ${(activeId === place.id) ? 'btn-outline-light' : 'btn-outline-primary'}`}
            >
              Direcciones
            </button>
          </li>
        ))
      }
      

    </ul>
  )
}
