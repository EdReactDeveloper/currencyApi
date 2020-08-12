import { GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL } from '../../actions/types/currency';

const initialState = {
	isfetchingCur: true,
	currency: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_CURRENCIES: {
			return { ...state, isfetchingCur: true };
		}
		case GET_CURRENCIES_SUCCESS: {
			return { ...state, isfetchingCur: false, currency: payload.Valute.EUR };
		}
		case GET_CURRENCIES_FAIL: {
			return {
				...state,
				isfetchingCur: false,
				currency: null
			};
		}
		default:
			return state;
	}
};

export default reducer;
