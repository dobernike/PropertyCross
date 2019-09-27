import { SEARCH_STORAGE } from '../constants/constants';
import searchedListLoad from './searchedListLoad';
import getApartmens from './getApartmens';
import addItemToStorage from './addItemToStorage';

const PAGE_NUMBER = 1;

function fetchSearch(searchItem) {
    return async (dispatch) => {
        await getApartmens(searchItem, PAGE_NUMBER);

        addItemToStorage(SEARCH_STORAGE, searchItem);

        dispatch(searchedListLoad(SEARCH_STORAGE));
        return searchItem;
    };
}

export default fetchSearch;
