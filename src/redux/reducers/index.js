import { combineReducers } from 'redux';
import auth from './auth';
/**
 * @description combines all reducers into one
 */
const rootReducer = combineReducers({
    auth,
});

export default rootReducer;