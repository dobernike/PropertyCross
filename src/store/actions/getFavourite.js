import getLocalStorage from '../../services/localStorage/getLocalStorage';

function getFavourite(key) {
    return async (dispatch) => {
        const favorites = await getLocalStorage(key);

        return favorites;
    };
}

export default getFavourite;
