// Cria um componente redux
import { createStore } from 'redux';

// Reducer é a parte de tratamento dos estados globais
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
