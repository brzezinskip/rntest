
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import AppWithNavigationState from './src/navigators/AppNavigator';
import configureStore from './src/configureStore';

const store = configureStore()

const rntest = () => {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}

AppRegistry.registerComponent('rntest', () => rntest);