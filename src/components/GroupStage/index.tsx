import { Group } from "../../components";
import { Group as IGroup } from "../../types/Group";
import { Team } from "../../types/Team";
import "./styles.scss";

interface IGroupStage {
  matches: IGroup[]
  teams: Team[][]
  handleClick: (team: Team, groupIndex: number) => void
}

export default function GroupStage({ matches, teams, handleClick }: IGroupStage) {
  return (
    <div>
      <div className="info">
        Select the first, second and third place teams in each group
      </div>
      <div className="group-stage">
        {matches.map((el, index) => {
          return (
            <Group
              key={el.name}
              name={el.name}
              groupIndex={index}
              teams={teams[index]}
              positions={matches[index]}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}
