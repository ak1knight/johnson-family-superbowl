import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import EntryForm from "../../components/entryform"
import Layout from '../../components/layout'
import { questions } from "../../data/formdata"; 



const Edit = ({currentEntry, entryId}) => {
    // const router = useRouter();
    // let [currentEntry, setCurrentEntry] = useState();
    // let [entryId] = useState(router.query.entryId);
    
    // useEffect(() => {
    //     async function fetchData() {
    //         const entryResponse = await fetch(`/api/entry/get?entryId=${entryId}`);
    //         let test = await entryResponse.json()
    //         console.log(test);
    //         setCurrentEntry(test);
    //     }

    //     fetchData();
    // }, []);

    // console.log(!!currentEntry && Object.values(currentEntry.entry));

    return <Layout>
        <div className="jumbotron jumbotron-fluid bg-warning text-white">
            <div className="container">
                <h1 className="display-4">Edit Entry</h1>
            </div>
        </div>

        <div className="container mt-3">
            <div className="row">
                <div className="col-3-sm">
                    <div id="form-sidebar" className="d-none d-md-flex flex-column list-group" style={{position: "sticky", top: "10px"}}>
                        <Scrollspy items={ [{question: "Score"}, {question: "Yards"}, ...questions].map(q => `${q.question.toLowerCase().replace(/( |\W)/g, '')}`) } currentClassName="active">
                            {[{question: "Score"}, {question: "Yards"}, ...questions].map((q, i) => (
                                <a className="list-group-item list-group-item-action" key={i} href={`#${q.question.toLowerCase().replace(/( |\W)/g, '')}`}>{!!q.short ? q.short : q.question}</a>
                            ))}
                        </Scrollspy>
                    </div>
                </div>
                <div className="col-sm">
                    <EntryForm questions={Object.values(currentEntry.entry).slice(0,12)} endpoint={`/api/entry/update?entryId=${entryId}`} entry={currentEntry.entry} />
                </div>
            </div>
        </div>

        
    </Layout>
}

Edit.getInitialProps = async ({ req, query }) => {
    const baseUrl = req ? `http://${req.headers.host}` : '';
    const entryResponse = await fetch(`${baseUrl}/api/entry/get?entryId=${query.entryId}`);
    let currentEntry = await entryResponse.json();
    
    return { currentEntry, entryId: query.entryId };
}

export default Edit
