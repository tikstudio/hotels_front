export const SET_ROOMS_REQUEST = 'SET_ROOMS_REQUEST';
export const SET_ROOMS_SUCCESS = 'SET_ROOMS_SUCCESS';
export const SET_ROOMS_FAIL = 'SET_ROOMS_FAIL';

export function getRoomsRequest() {
    return {
        type: SET_ROOMS_REQUEST, payload: {}
    }
}
