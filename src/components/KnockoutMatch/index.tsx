import { Flag } from "..";
import { Team } from "../../types/Team";
import "./styles.scss";

interface IKnockoutMatch {
  match: Team;
  index: number;
  nextRound: string;
  round: (Team | null)[];
  handleClick: (match: Team, index: number, nextRound: string) => void;
}

export default function KnockoutMatch({
  match,
  index,
  round,
  nextRound,
  handleClick,
}: IKnockoutMatch) {
  return (
    <div
      className="knockout-team"
      onClick={() => handleClick(match, index, nextRound)}
    >
      <div className="knockout-team-name">
        <Flag team={match} width="40px" />
        <div>{match.name}</div>
      </div>
      <div className="knockout-selector">
        {round
          .filter((el) => el !== null)
          .find((el) => {
            if (el) {
              return el.name === match.name;
            } else return false;
          }) && <div>&#x2714;</div>}
      </div>
    </div>
  );
}
