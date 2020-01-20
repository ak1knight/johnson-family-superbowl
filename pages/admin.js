import React from 'react'
import EntryForm from "../components/entryform"
import Layout from '../components/layout'
import { questions } from "../data/formdata";



const Home = () => (
    <Layout>
        <div className="jumbotron jumbotron-fluid bg-danger text-white">
            <div className="container">
                <h1 className="display-4">Entry Form</h1>
            </div>
        </div>

        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <EntryForm questions={questions} />
                </div>
            </div>
        </div>

        
    </Layout>
)

export default Home
