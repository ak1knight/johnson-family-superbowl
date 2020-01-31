import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/layout';
import Card from '../components/card';
import BigBoardTable from "../components/bigboardtable";


const BigBoard = () => {
    return <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">The Big Board</h1>
            </div>
        </div>
        <div className="container mt-3">
            <Card>
                <div className="table-responsive">
                    <BigBoardTable />
                </div>
            </Card>
        </div>
    </Layout>
}


export default BigBoard
