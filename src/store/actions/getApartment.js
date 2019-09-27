import getApartmens from './getApartmens';
import getApartmentId from '../../utils/getApartmentId';

async function getApartment(props) {
    const { apartments, apartmentId, city, numberPageLoad } = props;
    const apartment = apartments.filter((apartmentData) => getApartmentId(apartmentData) === apartmentId);

    if (!apartment.length) {
        return getApartmens(city, numberPageLoad).then((response) =>
            getApartment({
                apartments: response.listings,
                apartmentId,
                city,
                numberPageLoad: numberPageLoad + 1,
            })
        );
    }

    return apartment[0];
}

export default getApartment;
