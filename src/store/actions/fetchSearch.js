import setLocalStorage from '../../services/localStorage/setLocalStorage';
import { SEARCH_STORAGE } from '../constants/constants';
import searchedListLoad from './searchedListLoad';
import getApartmens from './getApartmens';

const PAGE_NUMBER = 1;

function fetchSearch(searchItem) {
    return async (dispatch) => {
        await getApartmens(searchItem, PAGE_NUMBER);

        setLocalStorage(SEARCH_STORAGE, searchItem);
        dispatch(searchedListLoad(SEARCH_STORAGE));
        return searchItem;
    };
}

export default fetchSearch;
