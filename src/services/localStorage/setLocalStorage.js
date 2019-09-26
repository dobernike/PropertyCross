import getLocalStorage from './getLocalStorage';
import includes from '@ramda/includes';

const setLocalStorage = (key, value) => {
    const storage = getLocalStorage(key);

    if (!includes(value, storage)) {
        storage.unshift(value);
        const serializedState = JSON.stringify(storage);

        localStorage.setItem(key, serializedState);
    }
};

export default setLocalStorage;
