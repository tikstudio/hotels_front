import {SET_ROOMS_SUCCESS} from "../action/setRooms";

const initialState = {
    rooms: {}
};
export default function reducer(state = initialState, action) {

    switch (action.type) {

        case SET_ROOMS_SUCCESS: {
            const {rooms} = action.payload.data;
            return {
                ...state, rooms
            }
        }
        default: {
            return state
        }
    }
}
