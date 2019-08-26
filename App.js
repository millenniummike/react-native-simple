import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './Styles';

// Components
import MainScreen from "./screens/MainScreen";
import Header from './components/Header';
import Bottom from './components/Bottom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import logger from 'redux-logger'


const store = createStore(reducer, applyMiddleware(logger));

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
        <Header />
        <MainScreen/>
          <Bottom/>
        </SafeAreaView>
      </Provider>
    );
  }
}