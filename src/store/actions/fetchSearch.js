import setLocalStorage from '../../services/localStorage/setLocalStorage';
import { SEARCH_STORAGE } from '../constants/constants';
import getApi from '../../utils/getApi';
import { API_URL, checkJsonResponceCode } from '../../services/nestoria/nestoria';
import searchedListLoad from './searchedListLoad';

const defaultParams = {
    country: 'uk',
    pretty: '1',
    action: 'search_listings',
    encoding: 'json',
    listing_type: 'buy',
    page: '1',
    place_name: null,
};

function fetchSearch(searchItem) {
    return async (dispatch) => {
        const params = { ...defaultParams, place_name: searchItem };
        const response = await fetch(`${getApi(API_URL, params)}`);
        const json = await response.json();

        checkJsonResponceCode(json);

        setLocalStorage(SEARCH_STORAGE, searchItem);
        dispatch(searchedListLoad(SEARCH_STORAGE));
    };
}

export default fetchSearch;
