import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import QuestionScreen from './screens/QuestionScreen';
import SummaryScreen from './screens/SummaryScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const RootNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: { header: null }
  },
  Question: {
    screen: QuestionScreen,
    navigationOptions: { header: null }
  },
  Summary: {
    screen: SummaryScreen,
    navigationOptions: { header: null }
  },
});

export default App = ({ navigation }) => (
  <RootNavigator navigation={navigation} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
