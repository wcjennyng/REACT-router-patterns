import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './DogDetails.css'

function DogDetails({dog}) {
    if (!dog) return <Redirect to='/dogs'/>

    return (
        <div className='DogDetails'>
            <img src={dog.src} alt={dog.name} />
            <div className='DogDetails-facts'>
            <h2>{dog.name}</h2>
            <h3><i>{dog.age} years old</i></h3>
            <ul>
                {dog.facts.map((fact) => (
                    <li>{fact}</li>
                ))}
            </ul>
            
            <Link to='/dogs'>Home</Link>
            </div>
        </div>
    )
}

export default DogDetails