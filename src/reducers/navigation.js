import { NavigationActions } from 'react-navigation';
import { WELCOME, QUIZ, SUMMARY, RESTART_GAME } from "../constants";

import { RootNavigator } from '../navigators/AppNavigator';
const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Welcome'));


export default function nav(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case WELCOME:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.reset(),
                state
            );
            break;
        case QUIZ:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Quiz' }),
                state
            );
            break;
        case SUMMARY:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Summary' }),
                state
            );
            break;
        case RESTART_GAME:
            nextState = initialState;
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}