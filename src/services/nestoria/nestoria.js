export const API_URL = 'http://api.nestoria.co.uk/api';

export function checkJsonResponce(res) {
    const responceCode = Number(res.application_response_code);

    if (responceCode === 200 || responceCode === 202) {
        throw new Error(res.application_response_text);
    }

    if (res.page > res.total_pages) {
        throw new Error('Undefined url: searching page is over total pages');
    }

    return true;
}

export async function getApartmentsData(response) {
    const json = await response.json();

    checkJsonResponce(json.response);

    return json.response;
}
