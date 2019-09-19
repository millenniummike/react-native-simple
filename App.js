import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './Styles';

// Screens and panels
import MainScreen from "./screens/MainScreen";
import Header from './components/Header';
import Footer from './components/Footer';
import PanelMenu from './components/PanelMenu';
import PanelFilter from './components/PanelFilter';

// API
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
const client = axios.create({
  baseURL: '',
  responseType: 'json'
});
import reduxWebsocket from '@giantmachines/redux-websocket';
const reduxWebsocketMiddleware = reduxWebsocket();

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import logger from 'redux-logger'

// debug logger
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client), reduxWebsocketMiddleware, logger));

// no logger
//const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

//import { connect } from '@giantmachines/redux-websocket';
//store.dispatch(connect('ws://localhost:9000'));

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
            <PanelMenu />
            <PanelFilter />
            <Footer />
          </SafeAreaView>
      </Provider>
    );
  }
}