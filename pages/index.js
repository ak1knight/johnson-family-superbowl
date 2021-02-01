import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'
import EntryForm from "../components/entryform"
import Layout from '../components/layout'
import { questions } from "../data/formdata";



const Home = () => {
    const [year, setYear] = useState(2021);
    return <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">Entry Form</h1>
            </div>
        </div>

        <div className="container mt-3">
            <div className="row">
                <div className="col-3-sm">
                    <div id="form-sidebar" className="d-none d-md-flex flex-column list-group" style={{position: "sticky", top: "10px"}}>
                        <Scrollspy items={ [{question: "Score"}, {question: "Yards"}, ...questions[year]].map(q => `${q.question.toLowerCase().replace(/( |\W)/g, '')}`) } currentClassName="active">
                            {[{question: "Score"}, {question: "Yards"}, ...questions[year]].map((q, i) => (
                                <a className="list-group-item list-group-item-action" key={i} href={`#${q.question.toLowerCase().replace(/( |\W)/g, '')}`}>{!!q.short ? q.short : q.question}</a>
                            ))}
                        </Scrollspy>
                    </div>
                </div>
                <div className="col-sm">
                    <EntryForm year={year} questions={questions[year]} />
                </div>
            </div>
            
        </div>  
    </Layout>
}

export default Home
