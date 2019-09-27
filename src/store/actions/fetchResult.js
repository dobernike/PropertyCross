import getApartmens from './getApartmens';
import { RESULT_LIST_UPDATE } from '../constants/actionTypes';

function fetchResult(searchItem, pageNumber) {
    return async (dispatch) => {
        const responce = await getApartmens(searchItem, pageNumber);
        const payload = responce.listings;

        dispatch({ type: RESULT_LIST_UPDATE, payload });
        return responce;
    };
}

export default fetchResult;
