import React from 'react'
import { teams, periodNames } from "../components/entryform";
import Layout from '../components/layout';
import Card from '../components/card';
import data from '../data';

function formatScore(entry, quarter) {
    const firstTeamScore = entry[teams[0]][quarter].score;
    const secondTeamScore = entry[teams[1]][quarter].score
    return firstTeamScore == secondTeamScore ? `${firstTeamScore} - ${secondTeamScore} Tie` 
                : firstTeamScore > secondTeamScore ? `${firstTeamScore} - ${secondTeamScore} ${teams[0]}` 
                : `${secondTeamScore} - ${firstTeamScore} ${teams[1]}`
}

const BigBoard = ({ entries }) => {
    return <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">The Big Board</h1>
            </div>
        </div>
        <div className="container mt-3">
            <Card>
                <table className="table border-top-0">
                    <thead>
                        <tr>
                            <th className="border-top-0" scope="col">Name</th>
                            <th className="border-top-0" scope="col">Anthem Time</th>
                            {periodNames.map(q => <th className="border-top-0" scope="col">{`${q} Score`}</th>)}
                            {teams.map(t => <th className="border-top-0" scope="col">{`${t} Yards`}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map(e => (
                            <tr>
                                <th scope="row">{e.entry.name}</th>
                                <td>{e.entry[0].response}</td>
                                {periodNames.map(q => <td>{formatScore(e.entry, q)}</td>)}
                                {teams.map(t => <td>{e.entry[t].yards}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    </Layout>
}

BigBoard.getInitialProps = async ({ req }) => {
    if (req) {
        // this is server side
        // is fine to use aws-sdk here
        return {
            entries: await data.readEntries()
        };
    } else {
        // we are client side
        // fetch via api
        const response = await fetch('/api/entry')
        return { entries: await response.json() }
    }
}

export default BigBoard
