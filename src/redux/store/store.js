// initialize the store
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

// import sagas file
import rootSaga from '../middleware';

// initialize saga midleware
const sagaMiddleware = createSagaMiddleware();
// create store creates a Redux store and takes a reducer as the argument

const tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = tool;

const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, middleware);


// start our saga middleware
sagaMiddleware.run(rootSaga);

export default store;
