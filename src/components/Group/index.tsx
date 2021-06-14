import { Flag } from '..';
import { getGroupRanking } from '../../utils';
import './styles.scss';

export default function Group({ name, teams, positions, groupIndex, handleClick }) {
    return (
        <div className="group">
            <h2>{name}</h2>
            {teams.map(team => {
                const ranking = getGroupRanking(team.name, positions.teams);
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
