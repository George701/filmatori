import { combineReducers } from 'redux';
import cinema from './cinemaReducer';
import order from './orderReducer';

export default combineReducers({
    cinema,
    order
});
