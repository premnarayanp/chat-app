import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './styles/index.css';
import App from './components/App';
import chatting from './reducers';
// import rootReducer from './reducers';

//logger 
const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('ACTION', action);
  next(action);
};

const store = createStore(chatting, applyMiddleware(logger, thunk));
// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log(store);
console.log('state', store.getState());

export const StoreContext = createContext();
console.log('StoreContext', StoreContext);

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);