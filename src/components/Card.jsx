import React from 'react';
import './Card.css'

function Card({name, stack, state, desc}) {
  return (
    <div className='card'>
        <div className="card-Body">
            <h3 className="card-title">
                {name}
            </h3>
            <p className="card-origin">
               {state}
            </p>
            <p className="card-stack">
               {stack}
            </p>
            <p className="card-description">
                {desc}
            </p>
        </div>
    </div>
  )
}

export default Card;