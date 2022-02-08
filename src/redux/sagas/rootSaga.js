import {getProducts} from "../../apis/productsApi";
import {take, put} from 'redux-saga/effects'

export function* watchLoadSaga() {
    yield take('LOAD_PRODUCTS');
    const products = yield getProducts();
    yield put({type: 'SET_PRODUCTS', products})

}

export default function* rootSaga() {
    yield watchLoadSaga();
}