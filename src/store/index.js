import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '../history';
import createRootReducer from './reducers';

const store = createStore(
	createRootReducer(history),
	composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);

window.store = store;

export default store;