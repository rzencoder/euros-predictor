import { Flag } from "..";
import { Group as GroupType } from "../../types/Group";
import { Team } from "../../types/Team";
import { getGroupRanking } from "../../utils";
import "./styles.scss";

interface IGroup {
  name: string
  teams: Team[]
  positions: GroupType
  groupIndex: number
  handleClick: (team: Team, groupIndex: number) => void
}

export default function Group({
  name,
  teams,
  positions,
  groupIndex,
  handleClick,
}: IGroup) {
  return (
    <div className="group">
      <h2>{name}</h2>
      {teams.map((team) => {
        const ranking = getGroupRanking(team.name, positions.teams);
        return (
          <div
            key={`group-stage-${team.name}`}
            className="group-team-container"
            onClick={() => handleClick(team, groupIndex)}
          >
            <div className="group-team">
              <Flag team={team} width="40px" />
              <div>
                <div>{team.name}</div>
              </div>
            </div>
            <div className="group-position">
              <div className={ranking === "out" ? "out" : ""}>{ranking}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
