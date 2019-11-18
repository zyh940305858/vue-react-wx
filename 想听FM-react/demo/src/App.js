import React from 'react';
import Router from './router';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router></Router>
      </Provider>
    </div>
  );
}

export default App;
