import React from 'react'
import Scrollspy from 'react-scrollspy'
import EntryForm from "../components/entryform"
import Layout from '../components/layout'


let qs = [
    {question: "National Anthem", extrainfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci a magna bibendum cursus. Donec semper diam et dui suscipit, ut blandit purus pharetra. Maecenas vitae est sed nisl finibus dictum. Aliquam maximus risus at turpis mattis, at fermentum lacus fringilla. Nunc lectus erat, aliquet ut mauris vel, consectetur gravida est. Morbi metus arcu, efficitur nec dictum non, porttitor eu nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lacus neque, mattis et ornare sed, aliquam porttitor mi. Curabitur ut leo tellus.", options: {placeholder: "H:M"}}, 
    {question: "How old are you?"}, 
    {question: "Where do you live?"}
];

const Home = () => (
    <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">Entry Form</h1>
            </div>
        </div>

        <div className="container mt-3">
            <div className="row">
                <div className="col-3">
                    <div id="form-sidebar" className="flex-column list-group" style={{position: "sticky", top: "75px"}}>
                        <Scrollspy items={ [{question: "Scores"}, {question: "Yards"}, ...qs].map(q => `${q.question.toLowerCase().replace(/( |\W)/g, '')}`) } currentClassName="active">
                            {[{question: "Score"}, {question: "Yards"}, ...qs].map(q => (
                                <a className="list-group-item list-group-item-action" href={`#${q.question.toLowerCase().replace(/( |\W)/g, '')}`}>{q.question}</a>
                            ))}
                        </Scrollspy>
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
