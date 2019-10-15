import * as Types from '../actions/types';

const initialUserObj = {
    "signUpUsersList": [],
    "pending": false,
    "loggedIn": false,
    "isValidToken": false,
    "isBusiness": false,
    "empDetails": {},
    "result": {},
    "user": {
      "email": "",
      "displayName": "",
      "registered": false,
      "refreshToken": "",
      "expiresIn": "",
      "emailVerified": false,
      "validSince": "",
      "disabled": false,
      "lastLoginAt": "",
      "createdAt": ""
    }
  
  };

  const LOGIN_USER_SERVER_RESPONSE_SUCCESS = (state, action) => {
      console.log("Redux" + JSON.stringify(action));
      let newState = {...state}
      if(action.result !== undefined) {
          newState = Object.assign({}, state, {"result" : Object.assign({}, action.result)})
      }

      console.log("STATE->" + JSON.stringify(newState));
      return {...newState};
  }

    const LOGIN_USER_SERVER_RESPONSE_ERROR = (state, action) => {
        let newState = {...state}
        return {...newState};
    }

export default (state = initialUserObj, action) => {
    switch(action.type) {
        case Types.LOGIN_USER : 
        return Object.assign({}, state, {"loggedIn" : false, "isValidToen" : false, "pending" : true})
        case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS : 
        return (state,action);
        case Types.LOGIN_USER_SERVER_RESPONSE_ERROR :
        return (state);
        default: 
        return state;
    }
}