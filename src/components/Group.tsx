import { useState } from 'react'
import Flag from "react-flags";

export default function Group({ name, teams, positions, groupIndex, handleClick }) {
    const getRanking = (name) => {
        const index = positions.teams.findIndex(el => el.name === name) + 1
        if (index === 0 && positions.teams.length === 3) return "out"
        return index === 0 ? "+" : String(index);
    }

    return (
        <div className="group">
            <h2>{name}</h2>
            {teams.map(team => {
                return (
                    <div className="groupTeam" onClick={() => handleClick(team, groupIndex)}>
                        <Flag
                            name={team.flag}
                            format="svg"
                            width="40"
                            basePath="/img/flags"
                            alt={`${team.name} flag`} />
                        <div>{team.name}</div>
                        {getRanking(team.name)}
                    </div>
                )
            })}
        </div>
    )
}
