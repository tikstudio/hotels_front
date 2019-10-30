import {combineReducers} from "redux";
import services from "./services";
import account from "./account";


export default combineReducers({
    services,
    account
});