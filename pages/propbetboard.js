import React from 'react'
import Layout from '../components/layout';
import Card from '../components/card';
import PropBetBoardTable from '../components/propbetboardtable';


const PropBetBoard = () => {
    return <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">The Big Board</h1>
            </div>
        </div>
        <div className="container mt-3">
            <Card>
                <PropBetBoardTable />
            </Card>
        </div>
    </Layout>
}


export default PropBetBoard
