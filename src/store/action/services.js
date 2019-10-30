export const CHECK_REQUEST = 'CHECK_REQUEST';
export const CHECK_SUCCESS = 'CHECK_SUCCESS';
export const CHECK_FAIL = 'CHECK_FAIL';

export function singInRequest(checkIn, checkOut, guests) {
    return {
        type: CHECK_REQUEST, payload: {checkIn, checkOut, guests}
    }
}

export const SERVICE_REQUEST = 'SERVICE_REQUEST';
export const SERVICE_SUCCESS = 'SERVICE_SUCCESS';
export const SERVICE_FAIL = 'SERVICE_FAIL';

export function searchServices(data) {
    return {
        type: SERVICE_REQUEST, payload: {data}
    }
}


export const SERVICE_SEARCHE_REQUEST = 'SERVICE_SEARCHE_REQUEST';
export const SERVICE_SEARCHE_SUCCESS = 'SERVICE_SEARCHE_SUCCESS';
export const SERVICE_SEARCHE_FAIL = 'SERVICE_SEARCHE_FAIL';

export function services() {
    return {
        type: SERVICE_SEARCHE_REQUEST, payload: {}
    }
}