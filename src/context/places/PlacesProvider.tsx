
import { PlacesContext } from "./PlacesContext";
import { useEffect, useReducer } from "react";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers";
import { searchApi } from "../../apis";
import { stat } from "fs";
import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [ number, number ];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then(
      lngLat => dispatch({type: 'setUserLocation', payload: lngLat})
    );  
  }, []);
  
  const searchPlacesByTerm = async( query:String ) => {
    if(query.length === 0){
      dispatch({type: 'setPlaces', payload: []});
      return [];
    }

    if(!state.userLocation)  throw new Error("Usuario sin ubicación");
    
    dispatch({ type: 'setLoadigPlaces' });

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`,{
      params:{
        proximity: state.userLocation.join(',')
      }
    });

    dispatch({ type: 'setPlaces', payload: resp.data.features });

  }

  return (
    <PlacesContext.Provider value={{
      ...state,

      //Metdos
      searchPlacesByTerm
    }}>
      { children }
    </PlacesContext.Provider>
  )
}
