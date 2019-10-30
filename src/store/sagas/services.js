import {
    CHECK_FAIL,
    CHECK_REQUEST,
    CHECK_SUCCESS,
    SERVICE_REQUEST,
    SERVICE_SUCCESS,
    SERVICE_FAIL,
    SERVICE_SEARCHE_SUCCESS,
    SERVICE_SEARCHE_REQUEST,
    SERVICE_SEARCHE_FAIL

} from "../action/services";
import {takeLatest, call, put} from "redux-saga/effects";
import Api from "../../Api";

export default function* watcher() {
    yield takeLatest(CHECK_REQUEST, handleSignIn);
    yield takeLatest(SERVICE_REQUEST, handleSerch);
    yield takeLatest(SERVICE_SEARCHE_REQUEST,serviceSearch)
}

function* handleSignIn(action) {
    try {
        const {checkIn, checkOut, guests} = action.payload;
        const {data} = yield call(Api.getRestaurants, checkIn, checkOut, guests);
        yield put({
            type: CHECK_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: CHECK_FAIL,
            message: e.message,
        })
    }
}


function* handleSerch(action) {
    try {
        const {end, guests, start, page, services, price} = action.payload.data;
        const {data} = yield call(Api.getHotels, price, services, start, end, page, guests);
        yield put({
            type: SERVICE_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: SERVICE_FAIL,
            message: e.message,
        })
    }
}


function* serviceSearch(action) {
    try {
        const {data} = yield call(Api.getServices);
        yield put({
            type: SERVICE_SEARCHE_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: SERVICE_SEARCHE_FAIL,
            message: e.message,
        })
    }
}