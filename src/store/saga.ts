import {all} from "redux-saga/effects";
import { infoSaga } from "./ducs/info/sagas";
import { peoplesSaga } from "./ducs/peoples/sagas";

export default function* rootSaga() {
    yield all([
        peoplesSaga(),
        infoSaga(),
    ])
}

