import * as types from '../constants/actionTypes';
import userDetails from '../../helper/userDetails';

const initialState = {
    isAuthenticated: userDetails().isAuthenticated,
    user: userDetails().user,
    error: false
};
  
const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER_SUCCESS:
          return {
            isAuthenticated: action.response.isAuthenticated,
            user: action.response.user,
            error: false
          };
        case types.SET_CURRENT_USER_FAILURE:
          return {
            isAuthenticated: action.response.isAuthenticated,
            user: action.response.user,
            error: true
          };
    default: return state;
  }
};
  
export default auth;
