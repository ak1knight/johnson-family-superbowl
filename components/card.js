import React from 'react'

const Card = (props) => (
    <div id={props.id} className="card mb-3">
        {!!props.title && <h4 className="card-header">{props.title}</h4>}
        <div className="card-body">
            {props.children}
        </div>
        {!!props.extrainfo && <div className="card-footer font-weight-light text-muted">
            {props.extrainfo}
        </div>}
    </div>
)

export default Card