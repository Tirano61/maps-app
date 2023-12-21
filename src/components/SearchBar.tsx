import { ChangeEvent, useContext, useRef } from "react"

import { PlacesContext } from "../context"
import { SearchResults } from "./SearchResults"




export const SearchBar = () => {
  
  const debounceRef = useRef<NodeJS.Timeout>()

  const { searchPlacesByTerm } = useContext(PlacesContext)

  const onQueryChange = (event:ChangeEvent<HTMLInputElement>) =>{
    
    if(debounceRef.current)
      clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() =>{
      //TODO: hacer la consulta
      const resp = searchPlacesByTerm(event.target.value);
      console.log(resp);
    }, 500 );

  }
  
  return (
    <div className="search-container">
      <input 
        type="text" 
        className="form-control"
        placeholder="Buscar lugar ..."
        onChange={ onQueryChange }
      />
      <SearchResults />
    </div>
  )
}
