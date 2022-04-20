import axios from "axios"

export const FETCH_CAT_FACT_START = 'FETCH_CAT_FACT_START'
export const FETCH_CAT_FACT_SUCCESS = 'FETCH_CAT_FACT_SUCCESS'
export const FETCH_CAT_FACT_FAILURE = 'FETCH_CAT_FACT_FAILURE'

export const getCatFact = () => dispatch => {
    dispatch({type: FETCH_CAT_FACT_START})
    axios.get('https://catfact.ninja/fact')
    .then(res => {
        dispatch({type: FETCH_CAT_FACT_SUCCESS, payload: res.data.fact})
    })
    .catch(err => {
        dispatch({type: FETCH_CAT_FACT_FAILURE, payload: `${err.message}! Please try again`})
    })
}

