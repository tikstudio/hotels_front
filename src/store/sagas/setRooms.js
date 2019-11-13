import {
    SET_ROOMS_REQUEST,
    SET_ROOMS_SUCCESS,
    SET_ROOMS_FAIL,
} from "../action/setRooms";
import { takeLatest, call, put } from "redux-saga/effects";
import Api from "../../Api";

export default function* watcher() {
    yield takeLatest(SET_ROOMS_REQUEST, handleRooms)
}


function* handleRooms(action) {
    try {
        const { data } = yield call(Api.setRooms);
        yield put({
            type: SET_ROOMS_SUCCESS,
            payload: { data }
        })
    } catch (e) {
        console.warn(e)
        yield put({
            type:  SET_ROOMS_FAIL,
            message: e
        })
    }
}