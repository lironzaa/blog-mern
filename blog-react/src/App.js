import React from 'react';
import './App.css';
import PostMessages from './components/PostMessages';
import { Provider } from 'react-redux';
import { store } from './actions/store';
import { Container, AppBar, Typography } from '@material-ui/core';
import ButterToast, { POS_CENTER, POS_BOTTOM } from 'butter-toast';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            Blog Posts
          </Typography>
        </AppBar>
        <PostMessages />
        <ButterToast position={{ vertical: POS_BOTTOM, horizontal: POS_CENTER }} />
      </Container>
    </Provider >
  );
}

export default App;