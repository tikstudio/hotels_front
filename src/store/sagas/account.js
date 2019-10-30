import {
    REGISTRATION_FAIL,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS
} from "../action/account";
import { takeLatest, call, put } from "redux-saga/effects";
import Api from "../../Api";

export default function* watcher() {
    yield takeLatest(REGISTRATION_REQUEST, handleRegistration)
}


function* handleRegistration(action) {
    try {
        const { data } = yield call(Api.registration, action.payload.data);
        yield put({
            type: REGISTRATION_SUCCESS,
            payload: { data }
        })
    } catch (e) {
        yield put({
            type: REGISTRATION_FAIL,
            message: e
        })
    }
}