import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = ({listId}) => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = e => { 
    e.preventDefault(); 
    dispatch(addColumn({title,icon,listId}))
    setTitle(''); 
    setIcon('');
    console.log(title,icon, listId)
  }

  

   return ( 
   <form className={styles.columnForm} onSubmit={handleSubmit}> 
    <span className={styles.span}>Title:</span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} /> 
    <span className={styles.span}>Icon:</span> <TextInput type="text" value={icon} onChange={e=> setIcon(e.target.value)}/>
    <Button>Add column</Button> 
   </form> ); }; 
   
   
   export default ColumnForm;