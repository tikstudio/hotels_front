import {CHECK_SUCCESS, SERVICE_SEARCHE_SUCCESS, SERVICE_SUCCESS} from "../action/services";

const initialState = {
    home: {},
    searchHotel: [],
    data: []
};
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case CHECK_SUCCESS: {
            const {rooms} = action.payload.data;
            return {
                ...state, rooms,
            }
        }
        case SERVICE_SUCCESS: {
            const {searchHotel} = action.payload.data;
            return {
                ...state, searchHotel,
            }
        }

        case SERVICE_SEARCHE_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state, data,
            }
        }
        default: {
            return state
        }
    }
}