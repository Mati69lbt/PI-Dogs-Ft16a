import React from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage(){
    return (
        <div>
            <h1>¡¡¡ Los Pichichus !!!</h1>
            <Link to = '/home' >
                <button>Ingresa a nuestra Casita</button>
            </Link>
        </div>
    )
}