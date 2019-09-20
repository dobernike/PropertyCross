export const API_URL = 'http://api.nestoria.co.uk/api';

export function checkJsonResponceCode(json) {
    const responceCode = Number(json.response.application_response_code);

    if (responceCode === 200 || responceCode === 202) {
        throw new Error('Wrong search');
    }
    return true;
}
