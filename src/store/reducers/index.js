import {combineReducers} from "redux";
import services from "./services";
import account from "./account";
import setRooms from "./setRooms";


export default combineReducers({
    services,
    account,
    setRooms
});