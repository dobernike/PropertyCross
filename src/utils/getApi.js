function getApi(uri, obj) {
    return `${uri}?${Object.entries(obj)
        .map((entrie) => `${entrie.join('=')}&`)
        .join('')}`;
}

export default getApi;
