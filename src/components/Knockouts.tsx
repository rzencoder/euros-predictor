import Flag from "react-flags";

export default function Knockouts({ teams, handleClick, nextRound, title, roundIndex, positions }) {
    const formatTeams = () => {
        const res = [];
        for (let i = 0; i < teams.length; i += 2) {
            res.push([teams[i], teams[i + 1]])
        }
        return res
    }

    const formattedTeams = formatTeams(teams)

    return (
        <div className="knockout-stage" >
            <h2>{title}</h2>
            <div className={`knockout-round-container bracket-${roundIndex}`}>
                {formattedTeams.map((match, index) => {
                    return (
                        <div className="knockout-match bracket-team">
                            <div>
                                {match[0] &&
                                    <div className="knockout-team" onClick={() => handleClick(match[0], index, nextRound)}>
                                        <div>
                                            <Flag
                                                name={match[0].flag}
                                                format="svg"
                                                width="40"
                                                basePath="/img/flags"
                                                alt={`${match[0].name} flag`} />
                                            <div className="knockout-team-name">{match[0].name}</div>
                                        </div>
                                        <div className="knockout-selector">
                                            {positions[nextRound].filter(el => el !== null).find(el => el.name === match[0].name) && <div>&#x2714;</div>}
                                        </div>
                                    </div>
                                }
                            </div>
                            <div>v</div>
                            <div>
                                {match[1] &&
                                    <div className="knockout-team" onClick={() => handleClick(match[1], index, nextRound)}>
                                        <div>
                                            <Flag
                                                name={match[1].flag}
                                                format="svg"
                                                width="40"
                                                basePath="/img/flags"
                                                alt={`${match[1].name} flag`} />
                                            <div className="knockout-team-name">{match[1].name}</div>
                                        </div>
                                        <div className="knockout-selector">
                                            {positions[nextRound].filter(el => el !== null).find(el => el.name === match[1].name) && <div>&#x2714;</div>}

                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
