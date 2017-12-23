import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import QuestionScreen from '../screens/QuestionScreen';
import SummaryScreen from '../screens/SummaryScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export const RootNavigator = StackNavigator({
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

const AppWithNavigationState = ({ dispatch, nav }) => (
    <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);