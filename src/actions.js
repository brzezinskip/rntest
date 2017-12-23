import { API_URL, FETCHING_QUESTIONS, FETCHING_QUESTIONS_SUCCESS, FETCHING_QUESTIONS_FAILURE } from "./constants";


export default function fetchQuestionsFromAPI() {
    return (dispatch) => {
        dispatch(getQuestions())
        fetch(API_URL)
            .then(res => res.json())
            .then(json => dispatch(setResultsAndNavigateToQuestions(json.results)))
            .catch(err => dispatch(getQuestionsFailure(err)))
    }
}

function setResultsAndNavigateToQuestions(results) {
    return dispatch => {
        dispatch(getQuestionsSuccess(results));
        dispatch({ type: 'Question' });
    }
}

function getQuestions() {
    return {
        type: FETCHING_QUESTIONS
    };
}

function getQuestionsSuccess(data) {
    return {
        type: FETCHING_QUESTIONS_SUCCESS,
        data
    };
}

function getQuestionsFailure() {
    return {
        type: FETCHING_QUESTIONS_FAILURE
    }
}