import data from '../data'
import { useState, useEffect } from 'react';
import { questions } from "../data/formdata";

const PropBetBoardTable = ({year}) => {
    const [entries, setEntries] = useState();
    const [winningEntry, setWinningEntry] = useState();
    
    useEffect(() => {
        setEntries(null)
        setWinningEntry(null)

        async function fetchData() {
            const [entryResponse, winningEntryResponse] = await Promise.all([fetch(`/api/entry/${year}`), fetch(`/api/winningentry/${year}`)]);
            setEntries(await entryResponse.json());
            setWinningEntry(await winningEntryResponse.json());
        }

        fetchData();
    }, [year]);

    console.log(winningEntry);

    function checkWinningScore(entry, period) {
        return !!winningNumbers && !!winningEntry && !!winningEntry.entry[teams[0].name][period] && Math.abs(entry[teams[0].name][period].score - winningEntry.entry[teams[0].name][period].score) + Math.abs(entry[teams[1].name][period].score - winningEntry.entry[teams[1].name][period].score) == winningNumbers[period];
    }

    if (!!entries) {
        entries.sort((e1, e2) => 
            questions[year].slice(1).map((q, i) => !!winningEntry && winningEntry.yearKey === year && !!winningEntry.entry[i + 1] && e2.entry[i + 1].response == winningEntry.entry[i + 1].response ? q.options.find(o => o.name == winningEntry.entry[i + 1].response).score : 0).reduce((a,b) => a + b, 0) -
            questions[year].slice(1).map((q, i) => !!winningEntry && winningEntry.yearKey === year && !!winningEntry.entry[i + 1] && e1.entry[i + 1].response == winningEntry.entry[i + 1].response ? q.options.find(o => o.name == winningEntry.entry[i + 1].response).score : 0).reduce((a,b) => a + b, 0)
        )
    }

    return <table className="table table-sm border-top-0">
        <thead>
            <tr>
                <th className="border-top-0" scope="col"></th>
                <th className="border-top-0" scope="col">Name</th>
                {!!questions[year] && questions[year].slice(1).map((q, i) => <th key={i} className="border-top-0" scope="col">{q.short}</th>)}
                <th className="border-top-0" scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            {!!entries ? entries.map((e, i, arr) => {
                const entryScore = questions[year].slice(1).map((q, i) => !!winningEntry && winningEntry.yearKey === year && !!winningEntry.entry[i + 1] && e.entry[i + 1].response == winningEntry.entry[i + 1].response ? q.options.find(o => o.name == winningEntry.entry[i + 1].response).score : 0).reduce((a,b) => a + b, 0);
                const rank = arr.slice().map(a => questions[year].slice(1).map((q, i) => !!winningEntry && winningEntry.yearKey === year && !!winningEntry.entry[i + 1] && a.entry[i + 1].response == winningEntry.entry[i + 1].response ? q.options.find(o => o.name == winningEntry.entry[i + 1].response).score : 0).reduce((a,b) => a + b, 0)).indexOf(entryScore);

                return <tr key={e.id} style={rank < 5 ? {backgroundColor: `rgb(${193 + (rank * (62 / 5))},${226 + (rank * (29 / 5))},${255 + (rank * (0 / 5))})`} : {}}>
                    <th scope="row">{rank + 1}</th>
                    <th scope="row">{e.entry.name}</th>
                    {questions[year].slice(1).map((q, i) => <td className={!!winningEntry && winningEntry.yearKey === year && !!winningEntry.entry[i + 1] && e.entry[i + 1].response == winningEntry.entry[i + 1].response ? 'text-success font-weight-bold' : ''} key={i}>{e.entry[i + 1].response}</td>)}
                    <td className="font-weight-bold">{questions[year].slice(1).map((q, i) => !!winningEntry && winningEntry.yearKey === year && !!winningEntry.entry[i + 1] && e.entry[i + 1].response == winningEntry.entry[i + 1].response ? q.options.find(o => o.name == winningEntry.entry[i + 1].response).score : 0).reduce((a,b) => a + b, 0)}</td>
                </tr>
            }) :
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

export default PropBetBoardTable
