import getApi from '../../utils/getApi';
import { API_URL, getJson } from '../../services/nestoria/nestoria';

const defaultParams = {
    country: 'uk',
    pretty: '1',
    action: 'search_listings',
    encoding: 'json',
    listing_type: 'buy',
};

async function getApartmens(placeName, pageNumber) {
    const params = { ...defaultParams, page: pageNumber, place_name: placeName };
    const response = await fetch(`${getApi(API_URL, params)}`);

    return getJson(response);
}

export default getApartmens;
