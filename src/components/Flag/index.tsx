import "./styles.scss";
import { Team } from "../../types/Team";

interface IFlag {
  team: Team;
  width?: string;
}

export default function Flag({ team, width = "50px" }: IFlag) {
  return (
    <img
      style={{ width }}
      src={`./img/flags/${team.flag}.svg`}
      alt={`${team.name} flag`}
    />
  );
}
