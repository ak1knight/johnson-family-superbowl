import React, { useState } from "react"
import Card from "./card"
import { teams } from "./entryform";

const Yards = (props) => {
    teams.forEach(t => {
        [props.formData[t].yards, props.formData[t].setYards] = useState();
    });
    return <Card title="Total Yards" extrainfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci a magna bibendum cursus. Donec semper diam et dui suscipit, ut blandit purus pharetra. Maecenas vitae est sed nisl finibus dictum. Aliquam maximus risus at turpis mattis, at fermentum lacus fringilla. Nunc lectus erat, aliquet ut mauris vel, consectetur gravida est. Morbi metus arcu, efficitur nec dictum non, porttitor eu nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lacus neque, mattis et ornare sed, aliquam porttitor mi. Curabitur ut leo tellus.">
        <div className="row" >
            {teams.map(team => (
                <div className="col-md">
                    <h4>{team}</h4>
                    <input type="number" value={props.formData[team].yards} className="form-control" onChange={(e) => props.formData[team].setYards(e.target.value)} ></input>
                </div>
            ))}
        </div>
    </Card>
}

export default Yards