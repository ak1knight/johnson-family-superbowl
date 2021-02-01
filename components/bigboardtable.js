import data from '../data'
import { useState, useEffect } from 'react';
import { teams, periodNames } from "../data/formdata";

function formatScore(entry, quarter, year) {
    if (!entry[teams[year][0].name] || !entry[teams[year][1].name])
        return
    const firstTeamScore = parseInt(entry[teams[year][0].name][quarter].score);
    const secondTeamScore = parseInt(entry[teams[year][1].name][quarter].score);
    return firstTeamScore == secondTeamScore ? `${firstTeamScore} - ${secondTeamScore} Tie`
        : firstTeamScore > secondTeamScore ? `${firstTeamScore} - ${secondTeamScore} ${teams[year][0].name}`
            : `${secondTeamScore} - ${firstTeamScore} ${teams[year][1].name}`
}

function toSeconds(str) {
    if (str.includes(":")) {
        var pieces = str.split(":");
        var result = Number(pieces[0]) * 60 + Number(pieces[1]);
        return (result);
    } else {
        return Number(str);
    }
}

const BigBoardTable = ({year}) => {
    const [entries, setEntries] = useState();
    const [winningEntry, setWinningEntry] = useState();
    const [winningNumbers, setWinningNumbers] = useState();

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

    useEffect(() => {
        let wn = {};
        setWinningNumbers(null);

        if (!winningEntry || Object.keys(winningEntry.entry).length === 0 || !winningEntry.entry[teams[year][0].name]) {
            return
        }

        periodNames.forEach(period => {
            if (!!winningEntry.entry[teams[year][0].name][period] && !!winningEntry.entry[teams[year][0].name][period].score) {
                wn[period] = Math.min(...entries.map((e) => Math.abs(e.entry[teams[year][0].name][period].score - winningEntry.entry[teams[year][0].name][period].score) + Math.abs(e.entry[teams[year][1].name][period].score - winningEntry.entry[teams[year][1].name][period].score)));
            }
        });

        teams[year].forEach(team => {
            if (winningEntry.entry[team.name].yards) {
                wn[team.name] = Math.min(...entries.map(e => Math.abs(e.entry[team.name].yards - winningEntry.entry[team.name].yards)));
            }
        })

        if (!!winningEntry.entry[0].response) {
            wn.anthemLength = Math.min(...entries.map(e => Math.abs(toSeconds(e.entry[0].response) - toSeconds(winningEntry.entry[0].response))));
        }

        setWinningNumbers(wn);
    }, [winningEntry])

    function checkWinningScore(entry, period) {
        return !!winningNumbers && !!winningEntry && !!winningEntry.entry[teams[year][0].name] && !!winningEntry.entry[teams[year][1].name] && !!winningEntry.entry[teams[year][0].name][period] && Math.abs(entry[teams[year][0].name][period].score - winningEntry.entry[teams[year][0].name][period].score) + Math.abs(entry[teams[year][1].name][period].score - winningEntry.entry[teams[year][1].name][period].score) == winningNumbers[period];
    }

    function checkWinningYards(entry, team) {
        return !!winningNumbers && !!winningEntry && !!winningEntry.entry[team] && Math.abs(entry[team].yards - winningEntry.entry[team].yards) == winningNumbers[team];
    }

    function checkWinningAnthemTime(entry) {
        return !!winningNumbers && !!winningEntry && !!winningEntry.entry[0].response && Math.abs(toSeconds(entry[0].response) - toSeconds(winningEntry.entry[0].response)) == winningNumbers.anthemLength;
    }

    return <table className="table table-sm border-top-0" style={{width: "calc(100% - 2px)"}}>
        <thead>
            <tr>
                <th className="border-top-0" scope="col">Name</th>
                <th className="border-top-0 text-center" scope="col">Anthem Time</th>
                {!!periodNames && periodNames.map((q, i) => <th key={i} className="border-top-0 text-center" scope="col">{`${q} Score`}</th>)}
                {!!teams[year] && teams[year].map((t, i) => <th key={i} className="border-top-0 text-center" scope="col">{`${t.name} Yards`}</th>)}
            </tr>
        </thead>
        <tbody>
            {!!entries ? entries.map(e => (
                <tr key={e.id}>
                    <th scope="row">{e.entry.name}</th>
                    <td className={checkWinningAnthemTime(e.entry) ? 'bg-light text-success border border-success text-center' : 'text-center'} >{e.entry[0].response}</td>
                    {periodNames.map((q, i) => <td className={checkWinningScore(e.entry, q) ? 'bg-light text-success border border-success text-center' : 'text-center'} key={i}>{formatScore(e.entry, q, year)}</td>)}
                    {teams[year].map((t, i) => <td className={checkWinningYards(e.entry, t.name) ? 'bg-light text-success border border-success text-center' : 'text-center'} key={i}>{e.entry[t.name]?.yards}</td>)}
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
