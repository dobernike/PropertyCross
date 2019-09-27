import includes from '@ramda/includes';
import setLocalStorage from '../../services/localStorage/setLocalStorage';
import getLocalStorage from '../../services/localStorage/getLocalStorage';

function addItemToStorage(key, searchItem) {
    const storage = getLocalStorage(key);

    if (!includes(searchItem, storage)) {
        storage.unshift(searchItem);
        setLocalStorage(key, storage);
    }
}

export default addItemToStorage;
