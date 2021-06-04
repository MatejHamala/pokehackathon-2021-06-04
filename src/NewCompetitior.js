import React, { useState } from 'react'

import { useParams, useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import  { newCompetitor } from './store/actions/competitions'


const NewCompetitior = () => {

    const { id } = useParams()

    const history = useHistory()

    const [ owner, setOwner ] = useState("")
    const [ url, setUrl ] = useState("")

    const dispatch = useDispatch()

    const onChangeOwner = (event) => {
        setOwner(event.target.value)
    }

    const onChangeUrl = (event) => {
        setUrl(event.target.value)
    }

    const onSubmitForm = () => {
        const form = {owner, url}
        dispatch(postCompetitor(id, form, history))
    }
    

    return (
        <div className="container">
        <div className="container-title">New competitior</div>
        <div>
            <div className="input-container">
                <label className="html-for" htmlFor="owner">Nickname:</label>
                <input
                    className="input"
                    name="owner"
                    id="owner"
                    type="text"
                    value={owner}
                    onChange={(event) => onChangeOwner(event)} 
                />
            </div>
            <div className="input-container">
                <label className="html-for" htmlFor="url">Url:</label>
                <input
                    className="input"
                    name="url"
                    id="url"
                    type="text"
                    value={url}
                    onChange={(event) => onChangeUrl(event)} 
                />
            </div>
        </div>
        <div className="container-footer">
            <button className="btn" onClick={() => onSubmitForm()}>Add new pokeman</button>
        </div>
    </div>
    )
}

export default NewCompetitior
