import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString } from '../../redux/store';
import { useEffect } from 'react';



const SearchForm = () => { 
  
  const dispatch = useDispatch();
  const [searchCard, setSearchCard] = useState('');

  useEffect(() => {
    dispatch(getSearchString('')); // Zerowanie searchString przy inicjacji
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchString(searchCard));
    setSearchCard('');
  }

  
  return ( 
  <form className={styles.searchForm} onSubmit={handleSubmit}> 
    <TextInput placeholder='Search...' value={searchCard} onChange={e => setSearchCard(e.target.value)}/>
    <Button><span className="fa fa-search" /></Button>
  </form> 
  ); 
}; 


export default SearchForm;
