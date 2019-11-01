import {DEL_PURCHASES, FINISH_PURCHASES, SAVE_PURCHASES,SAVE_USERS} from "../actions/index";


const initialState = {
    data: [],
    users:[]
};
export default function reducer(state = initialState, action) {

    switch (action.type) {

        case SAVE_PURCHASES: {
            let {data} = state;
            data.push(action.payload.price);

            return {...state, data: [...data]};

        }

        case DEL_PURCHASES: {
            let {data} = state;
            let x = data.filter((el) => el !== action.payload.dress);
            return {...state, data: [...x]};
        }

        case FINISH_PURCHASES: {
            return {...state, data: []}
        }

        case SAVE_USERS: {
            let {users} = state;
            users.push(action.payload.obj);
            return {...state,users:[...users]}
        }

        default: {
            return state
        }
    }
}
