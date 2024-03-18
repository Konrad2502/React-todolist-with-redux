import styles from './Card.module.scss'
// import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/store';



const Card = props => {

  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id))
  }

  const handleRemoveCard = () => {
    dispatch(removeCard(props.id));
  }


  return(
    <>
    <li className={styles.card}>{props.title}
    <div className={styles.btn}>
    <button onClick={handleToggleFavorite} className={props.isFavorite ? styles.favorite : null}><FontAwesomeIcon icon={faStar}/></button>
    <button onClick={handleRemoveCard}><FontAwesomeIcon icon={faTrash}/></button>
    </div>
    </li>
    </>
     );

}

export default Card;