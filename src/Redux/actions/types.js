export const SUCCESS = 'LOGIN_SUCCESS';
export const CLEAR = 'LOGIN_CLEAR';
export const ERROR = 'LOGIN_ERROR';

export function success(text){
    return{
        type : LOGIN_SUCCESS,
        text
    }
}

export function clear(text) {
    return{
        type : LOGIN_CLEAR,
        text
    }
}

export function error(text) {
    return {
        type : LOGIN_ERROR,
        text
    }
}