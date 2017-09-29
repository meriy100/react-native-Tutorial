import { combineReducers } from 'redux';

export interface User {
  id: number;
  name: string;
  email: string;
}


const initial:Array<User> = [];
let users = (state = initial, action:any) => {
  switch (action.type) {
    default:
      return state;
  }
}


const reducer = combineReducers({users})
export default reducer;
