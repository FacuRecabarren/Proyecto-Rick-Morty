import { useState } from "react";
import styles from "./SearchBar.module.css"

function SearchBar(props) {

   const [character, setCharacter] = useState("");
   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.divSearchBar}>
         <input type='search' value={character} onChange={(e) => handleChange(e)} className={styles.inputSearchBar}/>
         <button onClick={() => props.onSearch(character)} className={styles.buttonSearchBar}>AGREGAR</button>
      </div>
   );
}

export default SearchBar;