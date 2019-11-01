export const SAVE_PURCHASES = 'SAVE_PURCHASES';
export const DEL_PURCHASES = 'DEL_PURCHASES';
export const FINISH_PURCHASES = 'FINISH_PURCHASES';
export const SAVE_USERS = 'SAVE_USERS';


export function save(price) {

    return {
        type: SAVE_PURCHASES, payload: { price }
    }
}


export function del(dress) {

    return {
        type: DEL_PURCHASES, payload: { dress }
    }
}

export function finish() {

    return {
        type:FINISH_PURCHASES, payload: {}
    }
}

export function saveUsers(obj) {

    return {
        type:SAVE_USERS,payload: { obj }
    }
}
