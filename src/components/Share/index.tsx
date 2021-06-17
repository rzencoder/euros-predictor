import { Positions } from "../../types/Positions";
import { Team } from "../../types/Team";
import { encodeScenario } from "../../utils";
import "./styles.scss";

interface IShare {
  setShowShare: (showShare: boolean) => void;
  positions: Positions;
  teams: Team[][];
}

export default function Share({ setShowShare, positions, teams }: IShare) {
  const url = encodeScenario(JSON.parse(JSON.stringify(positions)), teams);
  return (
    <div className="modal-overlay" onClick={() => setShowShare(false)}>
      <div className="modal" onClick={() => setShowShare(true)}>
        <div className="modal-container">
          <button className="close" onClick={() => setShowShare(false)}>
            &#x2716;
          </button>
          <div className="modal-link">{url}</div>
          <button
            className="copy"
            onClick={() => navigator.clipboard.writeText(url)}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}
