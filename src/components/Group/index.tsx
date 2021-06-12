import { Flag } from '..';
import './styles.scss';

export default function Group({ name, teams, positions, groupIndex, handleClick }) {
    const getRanking = (name) => {
        const index = positions.teams.findIndex(el => el.name === name) + 1
        if (index === 0 && positions.teams.length === 3) return "out"
        if (index === 0) return "+"
        if (index === 1) return "1st"
        if (index === 2) return "2nd"
        if (index === 3) return "3rd"
    }

    return (
        <div className="group">
            <h2>{name}</h2>
            {teams.map(team => {
                const ranking = getRanking(team.name);
                return (
                    <div key={`group-stage-${team.name}`} className="group-team-container" onClick={() => handleClick(team, groupIndex)}>
                        <div className="group-team">
                            <Flag team={team} width="40px" />
                            <div><div>{team.name}</div></div>
                        </div>
                        <div className="group-position">
                            <div className={ranking === "out" ? "out" : ""}>{ranking}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
