import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import styles from "./Nav.module.css"

function Nav({ onSearch }) {
    return (

        <nav className={styles.nav}>   
            <Link to="/about" className={styles.buttons}>About</Link>
            <Link to="/home" className={styles.buttons}>Home</Link> 
            <Link to="/favorites" className={styles.buttons}>Favorites</Link> 
            <SearchBar onSearch={onSearch}/>
        </nav>
        
    )
}

export default Nav;