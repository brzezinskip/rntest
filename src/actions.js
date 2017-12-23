import {
    API_URL,
    RESTART_GAME,
    SUMMARY,
    QUIZ,
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
        dispatch({ type: QUIZ });
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
    return dispatch => {
        if (answersCount === 10) { dispatch({ type: SUMMARY }); }
        dispatch(answerQuestion(answer));
    }
}

function answerQuestion(answer) {
    return {
        type: QUESTION_ANSWERED,
        answer,
    }
}

export function restartGame() {
    return {
        type: RESTART_GAME
    }
}