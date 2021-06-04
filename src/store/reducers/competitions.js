import { 
    GETING_COMPETITIONS,
    GET_COMPETITIONS_SUCCESS,
    GET_COMPETITIONS_FAILURE,

    GETING_COMPETITORS,
    GET_COMPETITORS_SUCCESS,
    GET_COMPETITORS_FAILURE,

    POSTING_COMPETITOR,
    POSTED_COMPETITOR

} from "../actions/types"

const competitionsInitState = {
    competitionsLoading: false,
    competitionsError: null,
    competitions: null
}
export const competitions = (state=competitionsInitState, action) => {
    switch (action.type) {
        case GETING_COMPETITIONS:
            return {
                competitionsLoading: true,
                competitionsError: null,
                competitions: null
            }
        
        case GET_COMPETITIONS_SUCCESS:
            return {
                ...state,
                competitionsLoading: false,
                competitions: action.payload,
            }

        case GET_COMPETITIONS_FAILURE:
            return {
                ...state,
                competitionsLoading: false,
                competitionsError: action.error
            }

        default:
            return state
    }
}

const competitorsInitState = {
    competitorsLoading: false,
    competitorsError: null,
    competitors: null
}
export const competitors = (state=competitorsInitState, action) => {
    switch (action.type) {
        case GETING_COMPETITORS:
            return {
                competitorsLoading: true,
                competitorsError: null,
                competitors: null
            }
        
        case GET_COMPETITORS_SUCCESS:
            return {
                ...state,
                competitorsLoading: false,
                competitors: action.payload,
            }

        case GET_COMPETITORS_FAILURE:
            return {
                ...state,
                competitorsLoading: false,
                competitorsError: action.error
            }

        default:
            return state
    }
}

const newCompetitorInitState = {
    newCompetitorLoading: false,
    newCompetitorError: null,
}
export const newCompetitor = (state=newCompetitorInitState, action) => {
    switch (action.type) {
        case POSTING_COMPETITOR:
            return {
                competitorsLoading: true,
                competitorsError: null,
            }
        
        case POSTED_COMPETITOR:
            return {
                newCompetitorLoading: false,
                newCompetitorError: action.payload
            }

        default:
            return state
    }
}
