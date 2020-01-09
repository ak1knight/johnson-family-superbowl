import React, { useState } from 'react'
import Card from "./card";

const EntryForm = (props) => {
    let [anthemLength, setAnthemLength] = useState();
    let [name, setName] = useState(props.name);
    props.questions.forEach(q => [q.response, q.setResponse] = useState());

    return <form>
        <Card title="National Anthem Length">
            <input type="text" value={anthemLength} className="form-control" placeholder="MM:SS" onChange={(e) => setAnthemLength(e.target.value)}></input>
        </Card>
        {props.questions.map(q => <Card title={q.question}>
            <input type="text" value={q.response} className="form-control" onChange={(e) => q.setResponse(e.target.value)}></input>
        </Card>)}
        <Card title="Enter Name">
            <div className="row justify-content-between">
                <div className="col">
                    <input type="text" value={name} className="form-control form-control-lg" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-auto">
                    <input type="submit" className="btn btn-primary btn-lg" value="Submit" />
                </div>
            </div>
        </Card>
    </form>
}

export default EntryForm