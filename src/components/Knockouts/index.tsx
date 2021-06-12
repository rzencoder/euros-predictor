import { Flag } from '..';
import './styles.scss';

export default function Knockouts({ teams, handleClick, nextRound, title, roundIndex, positions }) {
    const formatTeams = (teams) => {
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
                        <div key={`knockout-stage-${roundIndex}-${index}}`} className="knockout-match bracket-team">
                            <div>
                                {match[0] && match[1] &&
                                    <div className="knockout-team" onClick={() => handleClick(match[0], index, nextRound)}>
                                        <div className="knockout-team-name">
                                            <Flag
                                                team={match[0]}
                                                width="40px" />
                                            <div>{match[0].name}</div>
                                        </div>
                                        <div className="knockout-selector">
                                            {positions[nextRound].filter(el => el !== null).find(el => el.name === match[0].name) && <div>&#x2714;</div>}
                                        </div>
                                    </div>
                                }
                            </div>
                            {(match[0] && match[1]) && <div>v</div>}
                            <div>
                                {match[1] && match[0] &&
                                    <div className="knockout-team" onClick={() => handleClick(match[1], index, nextRound)}>
                                        <div className="knockout-team-name">
                                            <Flag
                                                team={match[1]}
                                                width="40px" />
                                            <div >{match[1].name}</div>
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
