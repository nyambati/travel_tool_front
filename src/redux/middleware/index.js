import { all } from 'redux-saga/effects';
import userAuthSagas from './userAuthSagas';

function* rootSaga() {
    yield all([
        userAuthSagas()
    ]);
}


export default rootSaga;