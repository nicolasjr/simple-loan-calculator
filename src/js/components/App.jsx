import React from 'react';
import { Provider } from 'react-redux';
import Calculator from './Calculator';
import configureStore from '../store/configureStore';


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
