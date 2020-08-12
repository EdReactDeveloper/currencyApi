import {GET_CURRENCIES,   GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAIL} from './types/currency'; 
import {getCurrencyApi, xmlRequestApi} from '../../api/currency'; 
import { BASE_URL, ALT_URL } from '../../configs';

export const getCurrencyAction = () => async dispatch =>{
  dispatch({type: GET_CURRENCIES})
let result 
  try {
    result = await xmlRequestApi(BASE_URL)
      if(!result){
      result = await getCurrencyApi(ALT_URL)
    }
    dispatch({type: GET_CURRENCIES_SUCCESS, payload: result})
    
  } catch (error) {
    dispatch({type: GET_CURRENCIES_FAIL})
  }

}