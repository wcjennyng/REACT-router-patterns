import React from 'react'
import { Link } from 'react-router-dom'
import './Color.css'

function Color({hex, color, history}) {
    if (!hex) {
        history.push('/colors')
    }
    return ( 
        <div className="Color" style={{backgroundColor: hex}}>
            <p><h3>This is {color}. Isn't it beautiful?</h3></p>
            <p>
                <Link to='/'>Go back</Link> 
            </p>
        </div>
    )
}

export default Color;

