import { KnockoutMatch } from '..';
import { formatKnockoutTeams } from '../../utils';
import './styles.scss';

export default function Knockouts({ teams, handleClick, nextRound, title, roundIndex, positions }) {
    const formattedTeams = formatKnockoutTeams([...teams])
    return (
        <div className="knockout-stage" >
            <h2>{title}</h2>
            <div className={`knockout-round-container bracket-${roundIndex}`}>
                {formattedTeams.map((match, index) => {
                    return (
                        <div key={`knockout-stage-${roundIndex}-${index}}`} className="knockout-match bracket-team">
                            <div>
                                {match[0] && match[1] &&
                                    <KnockoutMatch match={match[0]} index={index} nextRound={nextRound} round={positions[nextRound]} handleClick={handleClick} />
                                }
                            </div>
                            {(match[0] && match[1]) && <div>v</div>}
                            <div>
                                {match[1] && match[0] &&
                                    <KnockoutMatch match={match[1]} index={index} nextRound={nextRound} round={positions[nextRound]} handleClick={handleClick} />
                                }
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
