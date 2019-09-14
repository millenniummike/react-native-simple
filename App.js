import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './Styles';


// Components
import MainScreen from "./screens/MainScreen";
import Header from './components/Header';
import Bottom from './components/Bottom';
import Panel from './components/Panel';
import PanelFilter from './components/PanelFilter';

// API
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reduxWebsocket from '@giantmachines/redux-websocket';
const reduxWebsocketMiddleware = reduxWebsocket();

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import logger from 'redux-logger'

const client = axios.create({
  baseURL: '',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client), reduxWebsocketMiddleware, logger));
import { connect } from '@giantmachines/redux-websocket';
store.dispatch(connect('ws://localhost:9000'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
          <SafeAreaView style={styles.container}>
            <Header />
            <MainScreen />
            <Panel />
            <PanelFilter />
            <Bottom />
          </SafeAreaView>
      </Provider>
    );
  }
}