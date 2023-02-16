import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Card/Card.module.css";
import { orderCards, filterCards } from "../../redux/actions";


const Favorite = () =>{

    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state);

    const hanldeOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const hanldeFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <div>
                <select onChange={hanldeOrder}>
                    <option value="order" disabled="disabled">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={hanldeFilter}>
                    <option value="filter" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
            {
                myFavorites.map((character) =>{
                    return(
                        <div className={styles.divFavorites}>
                            <div className={styles.divCard}>
                                <Link className={styles.linkName} to={`/detail/${character.id}`}>
                                    <h2 className={styles.propiedadesName}>{character.name}</h2>
                                </Link>

                                <h2 className={styles.propiedadesSpecies}>{character.species}</h2>

                                <h2 className={styles.propiedadesGender}>{character.gender}</h2>

                                <div className={styles.imgDiv}>

                                    <img src={character.image} alt={character.name} className={styles.imgCard}/>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Favorite;