
import styles from './NavBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { NavLink} from 'react-router-dom';


const NavBar = () => {
  return(
      <nav className={styles.navigation}>
        <div className={styles.icon}>
          <Link to="/">
            <FontAwesomeIcon icon={faTasks}/>
          </Link>
        </div>
        <ul className={styles.list}>
          <li><NavLink className={({isActive}) => isActive? styles.linkActive: undefined} to="/">Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive? styles.linkActive: undefined}  to="/favorite">Favorite</NavLink></li>
          <li><NavLink className={({isActive}) => isActive? styles.linkActive: undefined}  to="/about">About</NavLink></li>
        </ul>
      </nav>
  )
};

export default NavBar;