import getLocalStorage from '../../services/localStorage/getLocalStorage';
import setLocalStorage from '../../services/localStorage/setLocalStorage';
import getApartmentId from '../../utils/getApartmentId';

async function deleteApartment(appartment) {
    const storage = getLocalStorage('favorites');
    const favorites = storage.filter((item) => getApartmentId(item) !== getApartmentId(appartment));

    setLocalStorage('favorites', favorites);
}

export default deleteApartment;
