import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//reducers
import { authReducer } from '../src/redux/reducer/auth-reducers';
const reducers = combineReducers({ auth: authReducer });
const initialState = {};
const middleware = [thunk];

const store = createStore(
   reducers,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
