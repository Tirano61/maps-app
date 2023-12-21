import { createContext } from "react";
import { Feature } from "../../interfaces/places";


export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [ number, number ];
  isLoadingPlaces: boolean;
  places: Feature[];
  //Metodos
  searchPlacesByTerm: (query: String) => Promise<any>;
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);