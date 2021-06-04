import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import  { getCompetitions } from './store/actions/competitions'

import { CgPokemon } from 'react-icons/cg'


const Competitions = () => {

    const [ readyToRender, setReadyToRender ] = useState(false)

    const { competitionsLoading, competitionsError, competitions} = useSelector(state => state.competitions)

    const history = useHistory()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompetitions())
        setReadyToRender(true)
    }, [])

    const handleCompetitorsnRedirect = (pokemon, id) => {
        history.push(`/competitors/${pokemon}/${id}`)
    }   

    if (!readyToRender || competitionsLoading || competitionsError) return null

    return (
        <div className="container">
            <div className="container-title">Competitions</div>
            {
                competitions.map((competition) => 
                    <div key={competition.id} className="row">
                        <div> 
                            <img className="row-image" src={competition.image_url} />
                        </div>

                        <div className="row-pokemon">{competition.pokemon}</div>

                        <div className="flexer" />

                        <div className="row-button">
                            <CgPokemon size={48} onClick={() => handleCompetitorsnRedirect(competition.pokemon,competition.id)}/>
                        </div>
                    </div>
                ) 
            }
        </div>

    )
}

export default Competitions