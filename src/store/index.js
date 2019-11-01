// Cria um componente redux
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducer é a parte de tratamento dos estados globais
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
