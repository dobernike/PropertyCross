import getLocalStorage from './getLocalStorage';

const setLocalStorage = (key, value) => {
    const storage = getLocalStorage(key);

    storage.push(value);
    const serializedState = JSON.stringify(storage);

    localStorage.setItem(key, serializedState);
};

export default setLocalStorage;
