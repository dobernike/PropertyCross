const getLocalStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(key);

        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch {
        return [];
    }
};

export default getLocalStorage;
