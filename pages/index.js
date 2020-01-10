import React from 'react'
import EntryForm from "../components/entryform"
import Layout from '../components/layout';

let qs = [
    {question: "National Anthem", options: {placeholder: "H:M"}}, 
    {question: "How old are you?"}, 
    {question: "Where do you live?"}
];

const Home = () => (
    <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>

        <div className="container mt-3">
            <div className="row">
                <div className="col-3">
                    <div id="form-sidebar" className="flex-column list-group">
                        {qs.map(q => (
                            <a className="list-group-item list-group-item-action" href={`#${q.question.toLowerCase().replace(/( |\W)/g, '')}`}>{q.question}</a>
                        ))}
                    </div>
                </div>
                <div className="col">
                    <EntryForm questions={qs} />
                </div>
            </div>
        </div>
    </Layout>
)

export default Home
