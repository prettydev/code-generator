import * as React from 'react';

const initialState = {
  user: {
    name: '',
    phone: '',
  },
  location: '',
};
const store = React.createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'setUser': {
        return {...state, user: action.payload};
      }
      case 'setLocation': {
        return {...state, location: action.payload};
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export {store, StateProvider};
