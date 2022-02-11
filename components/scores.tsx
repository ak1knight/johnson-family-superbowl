import React, { useState } from "react"
import Card from "./card"
import { periodNames, teams, tiebreakers, Team } from "../data/formdata"

const extrainfo = ''

const Scores = React.forwardRef<HTMLDivElement, {year:number, formData:any}>(({year, formData}, ref) => {
    teams[year].forEach((t:Team) => {
        periodNames.forEach(q => {
            [formData[t.name][q].score, formData[t.name][q].setScore] = useState(formData[t.name][q].score || '');
            [formData[q].tiebreaker, formData[q].setTiebreaker] = useState(formData[q].tiebreaker || '');
        })
    });
    return <Card id={"score"} title="Score" extrainfo={extrainfo} ref={ref}>
        <div className="form-row" >
            <div className="col">
            </div>
            {periodNames.map((q, j)  => (
                <div key={j} className="col">
                    <h4>{q}</h4>
                </div>
            ))}
        </div>
        {teams[year].map((team, i) => (
            <div key={i} className="form-row" >
                <div className="col mb-2">
                    <h4>{team.name} {!!team.icon && <img style={{width:"1em", height:"1em", verticalAlign: "middle"}} src={team.icon} />}</h4>
                </div>
                {periodNames.map((q, j) => (
                    <div key={j} className="col">
                        <input type="number" value={formData[team.name][q].score} className="form-control" onChange={(e) => formData[team.name][q].setScore(e.target.value)} ></input>
                    </div>
                ))}
            </div>
        ))}
        <div className="form-row" >
            <div className="col mb-2">
                <h4>Tiebreaker</h4>
            </div>
            {periodNames.map((q, j) => (
                <div key={j} className="col">
                    {!!tiebreakers[year][q] && <input type="number" value={formData[q].tiebreaker} className="form-control form-control-sm" onChange={(e) => formData[q].setTiebreaker(e.target.value)} ></input>}
                    <small className="form-text text-muted">{tiebreakers[year][q]}</small>
                </div>
            ))}
        </div>
    </Card>
})

export default Scores