import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import currency from './currency';

const createRootReducer = (history) => {
	return combineReducers({
		router: connectRouter(history),
		currency
	});
};

export default createRootReducer;
