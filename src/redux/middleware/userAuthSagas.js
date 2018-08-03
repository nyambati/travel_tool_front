import { put, takeLatest, call  } from 'redux-saga/effects';
import userDetails from '../../helper/userDetails';
//import * as types from '../constants/actionTypes';
import {setCurrentUser,
  setCurrentUserSuccess,
  setCurrentUserFailure} from '../actionCreator';


// this is a watcher saga, watches for actions dispatched to the store then calls the incrementAsync saga
function* userAuth() {
  yield takeLatest(setCurrentUser(), setUser);
  // yield takeLatest(setCurrentUser(), setUser);
}

// worker saga: makes the api call when watcher saga sees the action
function* setUser() {
  // console.log('***', 'making api call');
    try {
      const response = yield call(userDetails);
      yield put(setCurrentUserSuccess(response));
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put(setCurrentUserFailure(error));
    }
}

// export the worker saga

export default userAuth;