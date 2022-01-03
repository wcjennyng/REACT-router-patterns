import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './NewColorForm.css'

function NewColorForm({addColor}) {
    const [form, updateForm] = useState({name:'', hex:'#ffffff'})
    const history = useHistory()

    function formChange(e) {
        e.persist()
        updateForm(f=> ({...f, [e.target.name]: e.target.value}))
    }

    function formSubmit(e) {
        e.preventDefault()
        addColor({ [form.name]: form.hex})
        history.push('/colors')
    }

    const {name, hex} = form

    return (
        <>
            <form className='NewColorForm' onSubmit={formSubmit}>
                <div>
                    <label htmlFor="name">Color name: </label>
                    <input name="name" id="name" placeholder="Enter color name" 
                    onChange={formChange} value={name}/>
                </div>
                <div>
                    <label htmlFor='hex'>Color value (select from color widget): </label>
                    <input type='color' name='hex' id='hex' 
                    onChange={formChange} value={hex}/>
                </div>
                <input type="Submit" value="Add this color" />
            </form>
        </>
    )
}

export default NewColorForm