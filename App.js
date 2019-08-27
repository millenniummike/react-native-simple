import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './Styles';

// Components
import MainScreen from "./screens/MainScreen";
import Header from './components/Header';
import Bottom from './components/Bottom';
import Panel from './components/Panel';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import logger from 'redux-logger'

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store)

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <Header />
            <MainScreen />
            <Panel />
            <Bottom />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}