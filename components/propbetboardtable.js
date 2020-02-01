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

    if (!!entries) {
        entries.sort((e1, e2) => 
            questions.slice(1).map((q, i) => !!winningEntry && !!winningEntry.entry[i + 1] && e2.entry[i + 1].response == winningEntry.entry[i + 1].response ? q.options.find(o => o.name == winningEntry.entry[i + 1].response).score : 0).reduce((a,b) => a + b, 0) -
            questions.slice(1).map((q, i) => !!winningEntry && !!winningEntry.entry[i + 1] && e1.entry[i + 1].response == winningEntry.entry[i + 1].response ? q.options.find(o => o.name == winningEntry.entry[i + 1].response).score : 0).reduce((a,b) => a + b, 0)
        )
    }

    return <table className="table table-sm border-top-0">
        <thead>
            <tr>
                <th className="border-top-0" scope="col"></th>
                <th className="border-top-0" scope="col">Name</th>
                {!!questions && questions.slice(1).map((q, i) => <th key={i} className="border-top-0" scope="col">{q.short}</th>)}
                <th className="border-top-0" scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            {!!entries ? entries.map((e, rank) => (
                <tr key={e.id} style={rank < 5 ? {backgroundColor: `rgb(${193 + (rank * (62 / 5))},${226 + (rank * (29 / 5))},${255 + (rank * (0 / 5))})`} : {}}>
                    <th scope="row">{rank + 1}</th>
                    <th scope="row">{e.entry.name}</th>
                    {questions.slice(1).map((q, i) => <td className={!!winningEntry && !!winningEntry.entry[i + 1] && e.entry[i + 1].response == winningEntry.entry[i + 1].response ? 'text-success font-weight-bold' : ''} key={i}>{e.entry[i + 1].response}</td>)}
                    <td className="font-weight-bold">{questions.slice(1).map((q, i) => !!winningEntry && !!winningEntry.entry[i + 1] && e.entry[i + 1].response == winningEntry.entry[i + 1].response ? q.options.find(o => o.name == winningEntry.entry[i + 1].response).score : 0).reduce((a,b) => a + b, 0)}</td>
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
