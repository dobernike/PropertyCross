import getLocalStorage from '../../services/localStorage/getLocalStorage';
import { SEARCH_LIST_UPDATE } from '../constants/actionTypes';

function searchedListLoad(key) {
    return async (dispatch) => {
        const payload = await getLocalStorage(key);

        dispatch({ type: SEARCH_LIST_UPDATE, payload });
    };
}

export default searchedListLoad;
