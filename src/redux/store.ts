import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';


import { adminReducer } from './admin/reducers'
import { booksReducer} from './books/reducers';
import { rootSaga } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
    compose;
const rootReducer = combineReducers({
    admin: adminReducer,
    books: booksReducer
});


export const store = createStore(
       rootReducer,
       {},
       composeEnhancer(applyMiddleware(thunk))
);


