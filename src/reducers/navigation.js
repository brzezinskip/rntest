import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../navigators/AppNavigator';
const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Welcome'));


export default function nav(state = initialState, action) {
    let nextState;
    console.log(action.type)
    switch (action.type) {
        case 'Welcome':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.reset(),
                state
            );
            break;
        case 'Quiz':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Quiz' }),
                state
            );
            break;
        case 'Summary':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Summary' }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}