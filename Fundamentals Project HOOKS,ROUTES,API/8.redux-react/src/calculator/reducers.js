import * as ActionTypes from './actionTypes';

export default function calculator(oldState=5, action) {
    switch(action.type){
        case ActionTypes.ADD:
            return oldState + action.value;
        case ActionTypes.SUBTRACT:
            return oldState - action.value;
        case ActionTypes.MULTIPLICATION:
            return oldState * action.value;
        case ActionTypes.DIVISION:
            return oldState * action.value
        default:
            return oldState;
    }
};
