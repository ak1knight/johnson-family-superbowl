import React, { useState } from "react"
import Card from "./card"
import { periodNames, teams } from "../data/formdata";

const Scores = (props) => {
    teams.forEach(t => {
        periodNames.forEach(q => {
            [props.formData[t.name][q].score, props.formData[t.name][q].setScore] = useState();
        })
    });
    return <Card id={"score"} title="Score">
        <div className="form-row" >
            <div className="col">
            </div>
            {periodNames.map((q, j)  => (
                <div key={j} className="col">
                    <h4>{q}</h4>
                </div>
            ))}
        </div>
        {teams.map((team, i) => (
            <div key={i} className="form-row" >
                <div className="col mb-2">
                    <h4>{team.name} {!!team.icon && <img style={{width:"1em", height:"1em", verticalAlign: "middle"}} src={team.icon} />}</h4>
                </div>
                {periodNames.map((q, j) => (
                    <div key={j} className="col">
                        <input type="number" value={props.formData[team.name][q].score} className="form-control" teamid="patriots" name="quarter1" onChange={(e) => props.formData[team.name][q].setScore(e.target.value)} ></input>
                    </div>
                ))}
            </div>
        ))}
    </Card>
}

export default Scores