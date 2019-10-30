export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';

export function registrationRequest(data) {
    return {
        type: REGISTRATION_REQUEST, payload: { data }
    }
}