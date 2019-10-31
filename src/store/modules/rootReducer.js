import { combineReducers } from 'redux';

import cart from './cart/reducer';

// Junta todos os reducers da aplicação, caso tenha mais de um
export default combineReducers({
  cart,
});
