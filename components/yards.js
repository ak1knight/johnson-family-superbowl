import React, { useState } from "react"
import Card from "./card"
import { teams } from "../data/formdata";

const extrainfo = `
Both Kansas City and San Francisco averaged right around 380 yards per game on offense during the regular season. However, the 49ers only gave up 281 yards per game on defense, which was second best in the NFL, while the Chiefs gave up nearly 350 yards per game.
`

const Yards = (props) => {
    teams.forEach(t => {
        [props.formData[t.name].yards, props.formData[t.name].setYards] = useState(props.formData[t.name].yards || '');
    });
    return <Card id="yards" title="Total Yards" extrainfo={extrainfo}>
        <div className="row" >
            {teams.map((team, i) => (
                <div key={i} className="col-md">
                    <h4>{team.name} {!!team.icon && <img style={{width:"1em", height:"1em", verticalAlign: "middle"}} src={team.icon} />}</h4>
                    <input type="number" value={props.formData[team.name].yards} className="form-control" onChange={(e) => props.formData[team.name].setYards(e.target.value)} ></input>
                </div>
            ))}
        </div>
    </Card>
}

export default Yards