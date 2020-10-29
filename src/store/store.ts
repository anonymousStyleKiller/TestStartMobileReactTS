import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import {IPeopleState} from "./ducs/peoples/contracts/state";
import rootSaga from "./saga";
import {IInfoState} from "./ducs/info/contracts/state";

export interface IStore {
    people: IPeopleState;
    info: IInfoState;
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);