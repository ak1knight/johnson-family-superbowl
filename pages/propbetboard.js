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
            <ul class="nav nav-tabs mb-3">
                {[2020, 2021].map(y => <li class="nav-item">
                    <a className={`nav-link ${y === year ? 'active' : ''}`} href="#" onClick={() => setYear(y)}>{y}</a>
                </li>)}
            </ul>
            <Card>
                <div className="table-responsive">
                    <PropBetBoardTable year={year} />
                </div>
            </Card>
        </div>
    </Layout>
}


export default PropBetBoard
