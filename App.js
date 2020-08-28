/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
// import {applyMiddleware, createStore} from 'redux';
// import {Provider} from 'react-redux';
// import creatSagaMiddleware from 'redux-saga';
// import SplashScreen from 'react-native-splash-screen';
import Root from './src/setup';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      {/* <Provider > */}
      <Root />
      {/* </Provider> */}
    </>
  );
};
export default App;
