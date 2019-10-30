import {fork, all} from 'redux-saga/effects';
import services from "./services";
import account from "./account";


export default function* watchers() {
    yield all([
        services,
        account,
    ].map(fork))
}