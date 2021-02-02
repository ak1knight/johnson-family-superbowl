import React, { useState } from 'react'
import Layout from '../components/layout';
import Card from '../components/card';
import PropBetBoardTable from '../components/propbetboardtable';


const PropBetBoard = () => {
    const [year, setYear] = useState(2021);

    return <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">The Big Board</h1>
            </div>
        </div>
        <div className="container mt-3">
            <div className="btn-toolbar mb-3" role="toolbar">
                <div className="btn-group mr-2" role="group">
                    {[2020, 2021].map(y => <button type="button" className={`btn btn-primary ${y === year ? 'active' : ''}`} onClick={() => setYear(y)}>{y}</button>)}
                </div>
            </div>
            <Card>
                <div className="table-responsive">
                    <PropBetBoardTable year={year} />
                </div>
            </Card>
        </div>
    </Layout>
}


export default PropBetBoard
