import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import dataSaga from '../src/sagas/saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(dataSaga);
    return store;
}