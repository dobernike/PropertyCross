import isApartmentInStorage from './isApartmentInStorage';
import deleteApartments from './deleteApartment';
import addItemToStorage from './addItemToStorage';

function toggleFavorite(data, cityName) {
    const key = `favorites`;
    const apartment = { ...data, city: cityName };

    if (isApartmentInStorage(key, apartment)) {
        deleteApartments(apartment);
        return false;
    }

    addItemToStorage(key, apartment);
    return true;
}

export default toggleFavorite;
