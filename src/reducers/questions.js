import { FETCHING_QUESTIONS, FETCHING_QUESTIONS_SUCCESS, FETCHING_QUESTIONS_FAILURE } from "../constants";

const initialState = {
    questions: [],
    isFetching: false,
    error: false,
}

export default function questionsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_QUESTIONS: {
            return {
                ...state,
                isFetching: true,
                questions: [],
            }
        }
        case FETCHING_QUESTIONS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                questions: action.data,
            }
        }
        case FETCHING_QUESTIONS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        }
        default:
            return state
    }
}