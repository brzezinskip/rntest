import React from 'react';
import { combineReducers } from 'redux';
import questions from './questions';
import nav from './navigation';

const rootReducer = combineReducers({
    questions,
    nav
});

export default rootReducer;