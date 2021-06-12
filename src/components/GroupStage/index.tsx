import { Group } from "../../components";
import './styles.scss';

export default function GroupStage({ matches, teams, handleClick }) {
    return (
        <div>
            <div className="info">Select the first, second and third place teams in each group</div>
            <div className="group-stage">
                {matches.map((el, index) => {
                    return <Group key={el.name} name={el.name} groupIndex={index} teams={teams[index]} positions={matches[index]} handleClick={handleClick} />
                })}
            </div>
        </div>
    )
}
