import { KnockoutMatch } from "..";
import { Rounds } from "../../types/Rounds";
import { Team } from "../../types/Team";
import { formatKnockoutTeams } from "../../utils";
import "./styles.scss";

interface IKnockouts {
  teams: (Team | null)[];
  handleClick: (
    team: Team,
    index: number,
    round: string,
    opponent: Team
  ) => void;
  nextRound: Rounds;
  title: string;
  roundIndex: string;
  positions: (Team | null)[];
}

export default function Knockouts({
  teams,
  handleClick,
  nextRound,
  title,
  roundIndex,
  positions,
}: IKnockouts) {
  const formattedTeams = formatKnockoutTeams([...teams]);
  return (
    <div className="knockout-stage">
      <h2>{title}</h2>
      <div className={`knockout-round-container bracket-${roundIndex}`}>
        {formattedTeams.map((match, index) => {
          return (
            <div
              key={`knockout-stage-${roundIndex}-${index}}`}
              className="knockout-match bracket-team"
            >
              <div>
                {match[0] && match[1] && (
                  <KnockoutMatch
                    match={match[0]}
                    index={index}
                    nextRound={nextRound}
                    round={positions}
                    handleClick={handleClick}
                    opponent={match[1]}
                  />
                )}
              </div>
              {match[0] && match[1] && <div>v</div>}
              <div>
                {match[1] && match[0] && (
                  <KnockoutMatch
                    match={match[1]}
                    index={index}
                    nextRound={nextRound}
                    round={positions}
                    handleClick={handleClick}
                    opponent={match[0]}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
