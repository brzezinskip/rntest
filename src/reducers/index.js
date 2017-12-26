import React from 'react';
import { combineReducers } from 'redux';

import nav from './navigation';
import questions from './questions';

const rootReducer = combineReducers({
    questions,
    nav
});

export default rootReducer;
