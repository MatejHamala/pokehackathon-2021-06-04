import React from 'react'

import { useParams, useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import  { getCompetitors } from './store/actions/competitions'


const Competitors = () => {

    const [ readyToRender, setReadyToRender ] = useState(false)

    const { pokemon, id } = useParams()

    const history = useHistory()

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCompetitors())
        setReadyToRender(true)
    }, [])

    const handleNewCompetitor = () => {
        history.push(`/new/${id}`)
    }

    if (!readyToRender) return null

    return (
        <div className="container">
            <div className="container-title">{pokemon}</div>
            {
                competitors.map((competitor) => 
                    <div key={competitor.id} className="row">
                        <div> 
                            <img className="row-image" src={competitor.url} />
                        </div>

                        <div className="row-pokemon">{competitor.owner}</div>

                        <div className="flexer" />

                        <div className="row-score">{competitor.score}</div>
                    </div>
                ) 
            }
            <div className="container-footer">
                <button className="btn" onClick={() => handleNewCompetitor()}>Catch Pokemon</button>
            </div>
        </div>
    )
}

export default Competitors
