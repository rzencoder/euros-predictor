import { Flag } from '..'
import './styles.scss'

export default function KnockoutMatch({ match, index, nextRound, round, handleClick }) {
    return (
        <div className="knockout-team" onClick={() => handleClick(match, index, nextRound)}>
            <div className="knockout-team-name">
                <Flag
                    team={match}
                    width="40px" />
                <div >{match.name}</div>
            </div>
            <div className="knockout-selector">
                {round.filter(el => el !== null).find(el => el.name === match.name) && <div>&#x2714;</div>}
            </div>
        </div>
    )
}
