export const orderAz = (a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
}



export const orderMayToMen = (a, b) => {
    if (a.population < b.population) {
        return 1;
    }
    if (a.population > b.population) {
        return -1;
    }
    return 0;
}

