import Button from '../Button/Button';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = e => { 
    e.preventDefault(); 
    dispatch(addList({title,description}));
    setTitle(''); 
    setDescription('');
   
  }

  

   return ( 
   <form className={styles.columnForm} onSubmit={handleSubmit}> 
    <span className={styles.span}>Title: </span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} /> 
    <span className={styles.span}>Description: </span> <TextInput type="text" value={description} onChange={e=> setDescription(e.target.value)}/>
    <Button>Add column</Button> 
   </form> ) }; 
   
   
   export default ListForm;