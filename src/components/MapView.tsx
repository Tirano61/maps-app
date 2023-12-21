
import { useContext, useLayoutEffect, useRef } from "react"
import { MapContext, PlacesContext } from "../context"
import { Loading } from "./Loading"
import mapboxgl from "mapbox-gl";



export const MapView = () => {

  const { isLoading, userLocation } = useContext( PlacesContext );
  const {  setMap } = useContext( MapContext );

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {

      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID 
        style: 'mapbox://styles/tirano61/ckgp6pq8t0iwa19qm0d4f4s7d', //'mapbox://styles/mapbox/light-v10', // style URL mapbox://styles/tirano61/ckgp6pq8t0iwa19qm0d4f4s7d
        center: userLocation, // starting position [lng, lat]
        zoom: 9 // starting zoom
      });
      
      setMap(map);
      
    }
  }, [ isLoading ]);

  if(isLoading){
    return (
      <Loading />
    )
  }

  return (
    <div 
      ref={ mapDiv }
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      { userLocation?.join(',') }
    </div>
  )
}
