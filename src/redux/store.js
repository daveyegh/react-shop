import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;