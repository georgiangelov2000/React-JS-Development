import {createStore} from 'redux';
import calculator from './reducers';

const store=createStore(calculator);
export default store;