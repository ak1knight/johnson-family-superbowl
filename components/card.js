import React from 'react'

const Card = (props) => (
    <div className="card bg-light mb-3">
        <div className="card-body">
            <h2>{props.title}</h2>
            {props.children}
        </div>
    </div>
)

export default Card