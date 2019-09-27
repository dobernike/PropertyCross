import includes from '@ramda/includes';
import getLocalStorage from '../../services/localStorage/getLocalStorage';

function isApartmentInStorage(keyStorage, apartment, cityName) {
    const storage = getLocalStorage(keyStorage);
    const data = cityName ? { ...apartment, city: cityName } : apartment;

    return includes(data, storage);
}

export default isApartmentInStorage;
