import React, { useState } from "react"
import Card from "./card"
import { teams } from "../data/formdata";

const extrainfo = ''

const Yards = (props) => {
    teams[props.year].forEach(t => {
        [props.formData[t.name].yards, props.formData[t.name].setYards] = useState(props.formData[t.name].yards || '');
    });
    return <Card id="yards" title="Total Yards" extrainfo={extrainfo}>
        <div className="row" >
            {teams[props.year].map((team, i) => (
                <div key={i} className="col-md">
                    <h4>{team.name} {!!team.icon && <img style={{width:"1em", height:"1em", verticalAlign: "middle"}} src={team.icon} />}</h4>
                    <input type="number" value={props.formData[team.name].yards} className="form-control" onChange={(e) => props.formData[team.name].setYards(e.target.value)} ></input>
                </div>
            ))}
        </div>
    </Card>
}

export default Yards