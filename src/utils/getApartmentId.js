function getApartmentId(apartment) {
    return apartment.lister_url.match(/(\d{5,})/g)[0];
}

export default getApartmentId;
