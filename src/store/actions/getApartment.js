import getApartmens from './getApartmens';
import getApartmentId from '../../utils/getApartmentId';

async function getApartment(props) {
    const { apartments, apartmentId, city, numberPageLoad } = props;
    const apartment = apartments.find((apartmentData) => getApartmentId(apartmentData) === apartmentId);

    if (!apartment) {
        return getApartmens(city, numberPageLoad).then((response) =>
            getApartment({
                apartments: response.listings,
                apartmentId,
                city,
                numberPageLoad: numberPageLoad + 1,
            })
        );
    }

    return apartment;
}

export default getApartment;
