import React from 'react'
import { Link } from 'react-router-dom'
import './ColorList.css'

function ColorList({ colors }) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ))

    return (
        <div className="ColorList">
            <header className="ColorList-header">
                <h1>Welcome to the Color Factory! </h1>  

            </header>
            <div className="ColorList-colors">
                <p>Please select a color 🌈</p>
                <ul>{colorLinks}</ul>
            </div>
            <h4>
                <i>Don't see a color you like? </i>
                <Link to='/colors/new'>Add a color</Link>
            </h4>
        </div>

    )
}

export default ColorList;