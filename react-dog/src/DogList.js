//takes all dog info from props of App

import React from 'react'
import { Link } from 'react-router-dom'
import './DogList.css'

function DogList({dogs}) {
    return (
        <>
            <h1>Here is a list of dogs</h1>
            <h3><i>Click on each name to find out more!</i></h3>
            <div className="DogList">
                {dogs.map(d=> (
                    <div className="dog" key={d.name}>
                    <h2>
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </h2>
                    <img src={d.src} alt={d.name}/>
                    
                    </div>
                ))}

            </div>
        </>
    )
}

export default DogList
