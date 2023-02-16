import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

function Card({ name, gender, onClose, species, image, id }) {

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }else{
         setIsFav(true)
         dispatch(addFavorite({ name, gender, onClose, species, image, id }))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.divCard}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.buttonCard} onClick={onClose}>X</button>

            <Link className={styles.linkName} to={`/detail/${id}`}>
               <h2 className={styles.propiedadesName}>{name}</h2>
            </Link>
            
            <h2 className={styles.propiedadesSpecies}>{species}</h2>
            <h2 className={styles.propiedadesGender}>{gender}</h2>
            <div className={styles.imgDiv}>
               <img src={image} alt={name} className={styles.imgCard}/>
            </div>
              
      </div>
   );
}

export default Card;