/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {useEffect} from 'react';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
import {name as appName} from './app.json'; 

const MainApp = () => {
    useEffect(() => {
      //SplashScreen.hide();
    });
return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => MainApp);
