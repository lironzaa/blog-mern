import React from 'react';
import './App.css';
import PostMessages from './components/PostMessages';
import { Provider } from 'react-redux';
import { store } from './actions/store';

function App() {
  return (
    <Provider store={store}>
      <PostMessages />
    </Provider>
  );
}

export default App;