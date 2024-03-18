import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from "react-redux"; 
import { getAllCards } from "../../redux/store";
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from "../../redux/store";


const Favorite = () => {

  const isFavorite = true;


  const favoriteCards = useSelector( state => getFavoriteCards(state, isFavorite));
  console.log(favoriteCards);
  return(
   <>
    <div className={styles.container}>
      <PageTitle>Favorite</PageTitle>
    </div>
    <article className={styles.column}> 
    <ul className={styles.cards}>
          {favoriteCards.length > 0 ? (
            // Jeśli są ulubione karty, renderuj je
            favoriteCards.map(card => (
              <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
            ))
          ) : (
            // Jeśli brak ulubionych kart, wyświetl komunikat
            <h1>No favorite cards</h1>
          )}
        </ul>
    </article>
    </> 
  )
  
}

export default Favorite;