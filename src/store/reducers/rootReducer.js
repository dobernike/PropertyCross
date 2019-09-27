import { combineReducers } from 'redux';
import searchedList from './searchedListReducer';
import apartmentsList from './apartmentsListReducer';

export default combineReducers({
    searchedList,
    apartmentsList,
});
