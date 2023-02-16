import Card from "../Card/Card";
import styles from "./Cards.module.css"

function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.divCards}>
         {
            characters.map((character) => {
               return <Card
               key= {character.id}
               name= {character.name}
               species= {character.species}
               gender= {character.gender}
               image= {character.image}
               onClose= {() => props.onClose(character.id)}
               id= {character.id}
               />
            })
         }
      </div>
   );
}


export default Cards;