import styles from './Card.module.scss'
// import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';


const Card = props => {

  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id))
    console.log(props.id);

  }
  return(
    <>
    <li className={styles.card}>{props.title}<button onClick={handleToggleFavorite} className={props.isFavorite ? styles.favorite : null}><FontAwesomeIcon icon={faStar}/></button></li>
    </>
     );

}

export default Card;