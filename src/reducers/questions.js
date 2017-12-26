import {
    RESTART_GAME,
    FETCHING_QUESTIONS,
    FETCHING_QUESTIONS_SUCCESS,
    FETCHING_QUESTIONS_FAILURE,
    QUESTION_ANSWERED,
} from "../util/constants";

const initialState = {
    fetchedQuestions: [],
    isFetching: false,
    error: false,
    activeQuestion: {},
    answers: [],
    activeQuestionIndex: 0,
}

const boolToStr = (bool) => bool ? "True" : "False";

function setAnswer(answer, activeQuestion, answers) {
    const answeredQuestion =
        Object.assign(
            {},
            activeQuestion,
            { correct: boolToStr(answer) === activeQuestion.correct_answer }
        )
    return answers.concat(answeredQuestion)
}

export default function questionsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_QUESTIONS: {
            return {
                ...state,
                isFetching: true,
                fetchedQuestions: [],
            }
        }
        case FETCHING_QUESTIONS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                fetchedQuestions: action.data,
                activeQuestion: action.data[state.activeQuestionIndex] //set first question as active initially
            }
        }
        case FETCHING_QUESTIONS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        }
        case QUESTION_ANSWERED: {
            return {
                ...state,
                answers: setAnswer(action.answer, state.activeQuestion, state.answers),
                activeQuestion: state.fetchedQuestions[state.activeQuestionIndex + 1],
                activeQuestionIndex: state.activeQuestionIndex + 1,
            }
        }
        case RESTART_GAME: {
            return initialState;
        }
        default:
            return state
    }
}