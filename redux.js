const Redux = require('redux');

// Initialize state
const initialState = {counter: 0, isAuth: false};

// Define reducer and pass initial state there, just return state in any case
const reducer = (state = initialState, action) => {
  const copyOfState = {...state};

  switch(action.type) {
    case 'INC':
      copyOfState.counter = state.counter + 1;
      return copyOfState;
    case 'DEC':
      copyOfState.counter = state.counter - 1;
      return copyOfState;
    case 'INCTEN':
      copyOfState.counter = state.counter + action.payload;
      return copyOfState;
    case 'DECBYFIVE':
      copyOfState.counter = state.counter - 5;
      return copyOfState;
    case 'AUTH':
      copyOfState.isAuth = action.isAuth;
      return copyOfState;
    default:
      return state;
  }
}

//create the store with this specific manager
const store = Redux.createStore(reducer);

// Get the current state
console.log(store.getState());

// define the increment action. These are action creators

const increment = () => {
  return {type: 'INC'}
}

const decrement = () => {
  return {type: 'DEC'}
}

const incrementByTen = (num) => {
  return {type: 'INCTEN', payload: num};
}

const decrementByFive = () => {
  return { type: 'DECBYFIVE'};
}

const setAuthToFalse = (isAuth) => {
  return { type: 'AUTH', isAuth: isAuth };
}

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(incrementByTen(10));
store.dispatch(decrementByFive());
store.dispatch(setAuthToFalse(true));
store.dispatch(setAuthToFalse(false));
