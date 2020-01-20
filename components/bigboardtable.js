import data from '../data'
import { useState, useEffect } from 'react';
import { teams, periodNames } from "../data/formdata";

function formatScore(entry, quarter) {
    const firstTeamScore = entry[teams[0].name][quarter].score;
    const secondTeamScore = entry[teams[1].name][quarter].score
    return firstTeamScore == secondTeamScore ? `${firstTeamScore} - ${secondTeamScore} Tie` 
                : firstTeamScore > secondTeamScore ? `${firstTeamScore} - ${secondTeamScore} ${teams[0].name}` 
                : `${secondTeamScore} - ${firstTeamScore} ${teams[1].name}`
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

    return <table className="table table-sm border-top-0">
        <thead>
            <tr>
                <th className="border-top-0" scope="col">Name</th>
                <th className="border-top-0" scope="col">Anthem Time</th>
                {!!periodNames && periodNames.map((q, i) => <th key={i} className="border-top-0" scope="col">{`${q} Score`}</th>)}
                {!!teams && teams.map((t, i) => <th key={i} className="border-top-0" scope="col">{`${t.name} Yards`}</th>)}
            </tr>
        </thead>
        <tbody>
            {!!entries ? entries.map(e => (
                <tr key={e.id}>
                    <th scope="row">{e.entry.name}</th>
                    <td>{e.entry[0].response}</td>
                    {periodNames.map((q, i) => <td key={i}>{formatScore(e.entry, q)}</td>)}
                    {teams.map((t, i) => <td key={i}>{e.entry[t.name].yards}</td>)}
                </tr>
            )) :
            <tr>
                <td className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </td>
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
