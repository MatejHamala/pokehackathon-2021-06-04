import { 
    GETING_COMPETITIONS,
    GET_COMPETITIONS_SUCCESS,
    GET_COMPETITIONS_FAILURE,

    GETING_COMPETITORS,
    GET_COMPETITORS_SUCCESS,
    GET_COMPETITORS_FAILURE,

    POSTING_COMPETITOR,
    POSTED_COMPETITOR
    
} from "./types"

import api from "../../services/api"


export const getCompetitions = () => async(dispatch) => {

    dispatch({type: GETING_COMPETITIONS})

    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const response = await api.get("/competition")
        console.log(response.data)
        dispatch({type: GET_COMPETITIONS_SUCCESS, payload: response.data })
        
    } catch(error) {
        dispatch({type: GET_COMPETITIONS_FAILURE, payload: "Something wrong" })
    }
}

export const getCompetitors = (id) => async(dispatch) => {

    dispatch({type: GETING_COMPETITORS})

    try {
        const response = await api.get(`/competition/${id}/image`)

        dispatch({type: GET_COMPETITORS_SUCCESS, payload: response.data })
        
    } catch(error) {
        dispatch({type: GET_COMPETITORS_FAILURE, payload: "Something wrong" })
    }
}

export const postCompetitor = (id, pokemon, form, history) => async(dispatch) => {

    dispatch({type: POSTING_COMPETITOR})

    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = await api.post(`/competition/${id}/image`, form, {headers})

        dispatch({type: POSTED_COMPETITOR, payload: response.data })
        history.push(`/competitors/${pokemon}/${id}`)
    } catch(error) {
        dispatch({type: POSTED_COMPETITOR, payload: "Something wrong" })
    }
}