import React, { useState } from 'react';
import { useRouter } from "next/router";
import Card from "./card";
import Scores from './scores';
import Yards from './yards';

export const periodNames = ["Quarter 1", "Quarter 2", "Quarter 3", "Final"];
export const teams = ["Ravens", "49ers"];
let formData = {};

teams.forEach(t => {
    formData[t] = { yards: '' }
    periodNames.forEach(q => {
        formData[t][q] = { score: '' }
    })
});

const EntryForm = (props) => {
    const router = useRouter();
    let [name, setName] = useState(props.name);
    props.questions.forEach(q => [q.response, q.setResponse] = useState());
    formData = { ...formData, ...props.questions };

    const handleSubmit = async event => {
        event.preventDefault();

        await fetch("/api/entry/new", {
            method: "POST",
            body: JSON.stringify({ entry: {...formData, name} })
        });

        router.push("/big_board");
    };

    return <form data-spy="scroll" data-target="#form-sidebar" data-offset="0" onSubmit={handleSubmit}>
        {props.questions.map(q => <Card id={`${q.question.toLowerCase().replace(/( |\W)/g, '')}`} title={q.question}>
            <input type="text" value={q.response} className="form-control" onChange={(e) => q.setResponse(e.target.value)} {...q.options}></input>
        </Card>)}
        <Scores id="scores" formData={formData} />
        <Yards id="yards" formData={formData} />
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