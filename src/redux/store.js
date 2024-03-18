import {createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors

export const getFilteredCards = ({cards, searchString}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getAllCards = state => state.cards;

export const getFavoriteCards = ({cards}, isFavorite) => cards.filter(card => card.isFavorite === isFavorite);



//action creators

export const addColumn = payload => ({type: 'ADD_COLUMN', payload});

export const addCard = payload => ({type: 'ADD_CARD', payload});

export const getSearchString = searchString => ({type: 'UPDATE_SEARCHSTRING', payload: searchString});

export const addList = payload => ({type: 'ADD_LIST', payload});

export const toggleCardFavorite = cardId => ({ type: 'TOGGLE_CARD_FAVORITE', payload: cardId });

export const removeCard = cardId => ({ type: 'REMOVE_CARD', payload: cardId });




const reducer = (state, action) => {
  switch(action.type) { 
 case 'ADD_COLUMN': 
 const newColumn = {
  ...action.payload,
  id: shortid(),
  listId: action.payload.listId // Dodaj listId do nowej kolumny
};
return { ...state, columns: [...state.columns, newColumn] };
 case 'ADD_CARD':
  return {...state, columns: [...state.columns], cards: [...state.cards, {...action.payload, id: shortid()}]};
 case 'UPDATE_SEARCHSTRING':
  return {...state, searchString: action.payload};
 case 'ADD_LIST':
  return {...state, lists: [...state.lists, {...action.payload, id: shortid()}], columns: [...state.columns], cards: [...state.cards]};
  case 'TOGGLE_CARD_FAVORITE': 
  return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
  case 'REMOVE_CARD':
    return {...state, cards: state.cards.filter(card => card.id !== action.payload)} 
  default: 
 return state;  };
 
  }

const store = createStore( reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); 


export default store;