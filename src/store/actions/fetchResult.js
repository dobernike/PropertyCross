import getApartmens from './getApartmens';

function fetchResult(searchItem, pageNumber) {
    return async (dispatch) => {
        const payload = await getApartmens(searchItem, pageNumber);

        return payload;
    };
}

export default fetchResult;
