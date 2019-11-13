import {fork, all} from 'redux-saga/effects';
import services from "./services";
import account from "./account";
import setRooms from './setRooms'

export default function* watchers() {
    yield all([
        services,
        account,
        setRooms
    ].map(fork))
}