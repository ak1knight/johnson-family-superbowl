import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EntryForm from "../../components/entryform"
import Layout from '../../components/layout'
import { questions } from "../../data/formdata";



const Edit = () => {
    const router = useRouter();
    let [currentEntry, setCurrentEntry] = useState();
    let [entryId] = useState(router.query.entryId);
    
    useEffect(() => {
        async function fetchData() {
            const entryResponse = await fetch(`/api/entry/get?entryId=${entryId}`);
            let test = await entryResponse.json()
            console.log(test);
            setCurrentEntry(test);
        }

        fetchData();
    }, []);

    console.log(!!currentEntry && Object.values(currentEntry.entry));

    return <Layout>
        <div className="jumbotron jumbotron-fluid bg-warning text-white">
            <div className="container">
                <h1 className="display-4">Edit Entry</h1>
            </div>
        </div>

        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    {!!currentEntry && <EntryForm questions={Object.values(currentEntry.entry).slice(0,12)} endpoint={`/api/entry/update?entryId=${entryId}`} entry={currentEntry.entry} />}
                </div>
            </div>
        </div>

        
    </Layout>
}

export default Edit
