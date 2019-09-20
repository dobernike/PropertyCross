function getApi(uri, obj) {
    const objLenght = Object.keys(obj).length;

    return `${uri}?${Object.entries(obj)
        .map((entrie, idx) => `${entrie.join('=')}${idx + 1 !== objLenght ? '&' : ''}`)
        .join('')}`;
}

export default getApi;
