import React, { useState } from "react"
import Card from "./card"
import { periodNames, teams } from "./entryform";

const Scores = (props) => {
    teams.forEach(t => {
        periodNames.forEach(q => {
            [props.formData[t][q].score, props.formData[t][q].setScore] = useState();
        })
    });
    return <Card id={"scores"} title="Score">
        <div className="form-row" >
            <div className="col">
            </div>
            {periodNames.map(q => (
                <div className="col">
                    <h4>{q}</h4>
                </div>
            ))}
        </div>
        {teams.map(team => (
            <div className="form-row" >
                <div className="col mb-2">
                    <h4>{team}</h4>
                </div>
                {periodNames.map(q => (
                    <div className="col">
                        <input type="number" value={props.formData[team][q].score} className="form-control" teamid="patriots" name="quarter1" onChange={(e) => props.formData[team][q].setScore(e.target.value)} ></input>
                    </div>
                ))}
            </div>
        ))}
    </Card>
}

export default Scores