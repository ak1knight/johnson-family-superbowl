import React from 'react'

type CardProps = {
    title?:string,
    id?:string,
    extrainfo?:string,
    children?:React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
    return <div ref={ref} className="card mb-3">
        {!!props.title && <h4 className="card-header">
            {!!props.id && <span id={props.id} style={{display: 'block', position: 'absolute', visibility: 'hidden', marginTop: '-23px', paddingTop: '23px'}}></span>}
            {props.title}
        </h4>}
        <div className="card-body">
            {props.children}
        </div>
        {!!props.extrainfo && <div className="card-footer font-weight-light text-muted">
            {props.extrainfo}
        </div>}
    </div>
});

export default Card