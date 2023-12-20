import { Map } from "mapbox-gl";
import { createContext } from "react";



interface MapCopntextProps {
  isMapReady: boolean,
  map?: Map,
  //Metodos
  setMap: (map: Map) => void
}

export const MapContext = createContext({} as MapCopntextProps );