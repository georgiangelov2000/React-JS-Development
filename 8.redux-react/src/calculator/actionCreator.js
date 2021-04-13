import * as ActionTypes from './actionTypes';

export function add(value){
    return {
        type:ActionTypes.ADD,
        value
    };
};

export function subtract (value) {
    return {
        type:ActionTypes.SUBTRACT,
        value
    }
}

export function multiplication(value){
    return {
        type:ActionTypes.MULTIPLICATION,
        value
    }
}

export function division (value){
    return {
        type:ActionTypes.DIVISION,
        value
    }
}