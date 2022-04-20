import { FETCH_CAT_FACT_START, FETCH_CAT_FACT_SUCCESS, FETCH_CAT_FACT_FAILURE } from "../actions";

const initialState = {
    catFact: '',
    error: '',
    isFetching: false
}

function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_CAT_FACT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_CAT_FACT_SUCCESS:
            return {
                ...state,
                catFact: action.payload,
                error: '',
                isFetching: false
            }
        case FETCH_CAT_FACT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default reducer