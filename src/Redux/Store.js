import { createStore, applyMiddleware } from 'redux';
import inputReducers from './Reducers/InputReducers';
import { thunk } from 'redux-thunk';

const store = createStore(inputReducers, applyMiddleware(thunk));

export default store;
