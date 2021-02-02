import React, { useState } from 'react';
import { useRouter } from "next/router";
import Card from "./card";
import Scores from './scores';
import Yards from './yards';
import { teams, periodNames } from "../data/formdata";


let formData = {};

teams[2021].forEach(t => {
    formData[t.name] = { yards: '' }
    periodNames.forEach(q => {
        formData[t.name][q] = { score: '' }
    })
});


const EntryForm = (props) => {
    const router = useRouter();
    let [name, setName] = useState(!!props.entry ? props.entry.name : '');
    //const [formData, setFormData] = useState(props.entry)
    const {year} = props

    // React.useEffect(() => {
    //     console.log("boom");
    //     let newFormData = {}
    //     teams[year].forEach(t => {
    //         newFormData[t.name] = { yards: '' }
    //         periodNames.forEach(q => {
    //             newFormData[t.name][q] = { score: '' }
    //         })
    //     });

    //     setFormData({ ...newFormData, ...props.questions })
    //   }, [year]);
    // if (!formData) {
        
    // }
    props.questions.forEach((q, i) => [q.response, q.setResponse] = useState(q.response));
    formData = props.entry || { ...formData, ...props.questions };

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(!props.isAdmin );
        if (!props.isAdmin && ( !name || props.questions.some(q => !q.response) || teams.some(t => !formData[t.name].yards || periodNames.some(p => formData[t.name][p].score !== '0' && !formData[t.name][p].score)))) {
            alert('Please respond to all questions before submitting');
            return
        }

        await fetch(props.endpoint || "/api/entry/new", {
            method: "POST",
            body: JSON.stringify({ entry: {...formData, name} })
        });

        router.push("/big_board");
    };

    console.log(year)

    return <form data-spy="scroll" data-target="#form-sidebar" data-offset="0" onSubmit={handleSubmit}>
        <Scores formData={ formData } year={ year } />
        <Yards formData={ formData } year={ year } />
        {props.questions.map((q, i) => <Card key={i} id={`${q.question.toLowerCase().replace(/( |\W)/g, '')}`} title={q.question} extrainfo={q.extrainfo} >
            { !!q.options ? 
                <div className="row">
                    {q.options.map((option, index, options) => 
                        <div className={`${options.length % 2 === 1 && index === options.length - 1 ? 'col-12' : 'col-6'}`} key={index} >
                            <button type="button" name={option.name} className={`btn btn-block ${q.response == option.name ? "btn-primary border-primary" : "btn-light"} border mt-2 d-flex justify-content-between align-items-center flex-wrap`} onClick={() => q.setResponse(option.name)}>
                                {!!option.image && <img src={option.image} className="img-fluid w-25"></img>}
                                {!!option.embed && <div className="w-100 mb-2 mt-1"><div className="embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" src={option.embed}></iframe></div></div>}
                                <div className="text-center mx-auto h6 my-2">{option.name + ' - ' + option.score}</div>
                            </button>
                        </div>
                    )}
                </div> :
                <input type="text" value={q.response} className="form-control" onChange={(e) => q.setResponse(e.target.value)} {...q.config}></input>
            }
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