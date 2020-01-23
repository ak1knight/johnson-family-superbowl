import React, { useState } from "react"
import Card from "./card"
import { periodNames, teams } from "../data/formdata";

const extrainfo = `Kansas City has one of the most explosive offenses in the NFL. Led by 2018 NFL MVP Patrick Mahomes' playmaking ability and cannon arm getting the ball to a speedy trio of recievers and all-pro TE Travis Kelce. The Chiefs averaged 28 points per game during the season, but that number has increased later in the season as key players returned from injury.
For all the firepower on the KC sideline, the 49ers' offense averaged an even better 29.9 points per game. San Francisco gets it done primarily on the ground, rather than through the air, with a stable of running backs headlined by Raheem Mostert and Tevin Coleman.`

const Scores = (props) => {
    teams.forEach(t => {
        periodNames.forEach(q => {
            [props.formData[t.name][q].score, props.formData[t.name][q].setScore] = useState(props.formData[t.name][q].score || '');
        })
    });
    return <Card id={"score"} title="Score" extrainfo={extrainfo}>
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