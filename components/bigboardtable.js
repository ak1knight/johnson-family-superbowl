import data from '../data'
import { useState, useEffect } from 'react';
import { teams, periodNames } from "../data/formdata";

function formatScore(entry, quarter) {
    const firstTeamScore = entry[teams[0]][quarter].score;
    const secondTeamScore = entry[teams[1]][quarter].score
    return firstTeamScore == secondTeamScore ? `${firstTeamScore} - ${secondTeamScore} Tie` 
                : firstTeamScore > secondTeamScore ? `${firstTeamScore} - ${secondTeamScore} ${teams[0]}` 
                : `${secondTeamScore} - ${firstTeamScore} ${teams[1]}`
}

const BigBoardTable = () => {
    const [entries, setEntries] = useState();
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/entry');
            setEntries(await response.json());
        }

        fetchData();
    }, []);

    return <table className="table border-top-0">
        <thead>
            <tr>
                <th className="border-top-0" scope="col">Name</th>
                <th className="border-top-0" scope="col">Anthem Time</th>
                {!!periodNames && periodNames.map(q => <th className="border-top-0" scope="col">{`${q} Score`}</th>)}
                {!!teams && teams.map(t => <th className="border-top-0" scope="col">{`${t} Yards`}</th>)}
            </tr>
        </thead>
        <tbody>
            {!!entries ? entries.map(e => (
                <tr>
                    <th scope="row">{e.entry.name}</th>
                    <td>{e.entry[0].response}</td>
                    {periodNames.map(q => <td>{formatScore(e.entry, q)}</td>)}
                    {teams.map(t => <td>{e.entry[t].yards}</td>)}
                </tr>
            )) :
            <tr>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </tr>}
        </tbody>
    </table>
}

// BigBoardTable.getInitialProps = async ({ req }) => {
//     if (req) {
//         // this is server side
//         // is fine to use aws-sdk here
//         return {
//             entries: await data.readEntries()
//         };
//     } else {
//         // we are client side
//         // fetch via api
//         const response = await fetch('/api/entry')
//         return { entries: await response.json() }
//     }
// }

export default BigBoardTable
