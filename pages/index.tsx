import React, { useRef, useState } from 'react'
import { Scrollspy } from '@makotot/ghostui'
import EntryForm from "../components/entryform"
import Layout from '../components/layout'
import { questions } from "../data/formdata";



const Home = () => {
    const [year, setYear] = useState(2023);

    const titleQs = [{question: "Score", short: "Score"}, {question: "Yards", short: "Yards"}, ...questions[year]]

    const items = [{question: "Score"}, {question: "Yards"}, ...questions[year]].map(q => `${q.question.toLowerCase().replace(/( |\W)/g, '')}`)

    const sectionRefs = items.map(() => useRef<HTMLDivElement>(null))

    console.log(sectionRefs)

    return <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">Entry Form</h1>
            </div>
        </div>

        <div className="container mt-3">
            <Scrollspy sectionRefs={sectionRefs} >
                {({ currentElementIndexInViewport, elementsStatusInViewport }) => (<div className="row">
                    <div className="col-3-sm">
                        <div id="form-sidebar" className="d-none d-md-flex flex-column list-group" style={{position: "sticky", top: "10px"}}>
                            {titleQs.map((q, i) => (
                                <a className={`list-group-item list-group-item-action ${ currentElementIndexInViewport === i && elementsStatusInViewport[i] ? "active" : "" }`} key={i} href={`#${q.short.toLowerCase().replace(/( |\W)/g, '')}`}>{q.short} {elementsStatusInViewport[i]}</a>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm">
                        <EntryForm year={year} questions={questions[year]} sectionRefs={sectionRefs} />
                    </div>
                </div>)}
            </Scrollspy>
        </div>
    </Layout>
}

export default Home
