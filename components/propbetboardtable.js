import data from '../data'
import { useState, useEffect } from 'react';
import { questions } from "../data/formdata";

const PropBetBoardTable = () => {
    const [entries, setEntries] = useState();
    const [winningEntry, setWinningEntry] = useState();
    
    useEffect(() => {
        async function fetchData() {
            const [entryResponse, winningEntryResponse] = await Promise.all([fetch('/api/entry'), fetch('/api/winningentry')]);
            setEntries(await entryResponse.json());
            setWinningEntry(await winningEntryResponse.json());
        }

        fetchData();
    }, []);

    console.log(winningEntry);

    function checkWinningScore(entry, period) {
        return !!winningNumbers && !!winningEntry && !!winningEntry.entry[teams[0].name][period] && Math.abs(entry[teams[0].name][period].score - winningEntry.entry[teams[0].name][period].score) + Math.abs(entry[teams[1].name][period].score - winningEntry.entry[teams[1].name][period].score) == winningNumbers[period];
    }

    return <table className="table table-sm border-top-0">
        <thead>
            <tr>
                <th className="border-top-0" scope="col">Name</th>
                {!!questions && questions.slice(1).map((q, i) => <th key={i} className="border-top-0" scope="col">{q.short}</th>)}
                <th className="border-top-0" scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            {!!entries ? entries.map(e => (
                <tr key={e.id}>
                    <th scope="row">{e.entry.name}</th>
                    {questions.slice(1).map((q, i) => <td className={!!winningEntry && !!winningEntry.entry[i + 1] && e.entry[i + 1].response == winningEntry.entry[i + 1].response ? 'bg-light text-success border border-success' : ''} key={i}>{e.entry[i + 1].response}</td>)}
                    <td>0</td>
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

export default PropBetBoardTable
