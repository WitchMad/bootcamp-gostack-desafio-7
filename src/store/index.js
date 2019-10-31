// Cria um componente redux
import { createStore } from 'redux';

// Reducer é a parte de tratamento dos estados globais
import reducer from './modules/cart/reducer';

const store = createStore(reducer);

export default store;
