import {
    API_URL,
    FETCHING_QUESTIONS,
    FETCHING_QUESTIONS_SUCCESS,
    FETCHING_QUESTIONS_FAILURE,
    QUESTION_ANSWERED,
} from "./constants";


export function fetchQuestionsFromAPI() {
    return (dispatch) => {
        dispatch(getQuestions())
        fetch(API_URL)
            .then(res => res.json())
            .then(json => dispatch(setResultsAndNavigateToQuiz(json.results)))
            .catch(err => dispatch(getQuestionsFailure(err)))
    }
}

function setResultsAndNavigateToQuiz(results) {
    return dispatch => {
        dispatch(getQuestionsSuccess(results));
        dispatch({ type: 'Quiz' });
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
        data,
    };
}

function getQuestionsFailure() {
    return {
        type: FETCHING_QUESTIONS_FAILURE
    }
}

export function answerQuestionAndNavigateToSummary(answersCount, answer) {
    console.log(answersCount)
    return dispatch => {
        if (answersCount === 10) { dispatch({ type: 'Summary' }); }
        else { dispatch(answerQuestion(answer)); }
    }
}

function answerQuestion(answer) {
    return {
        type: QUESTION_ANSWERED,
        answer,
    }
}