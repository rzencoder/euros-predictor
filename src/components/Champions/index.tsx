import Flag from "react-flags";
import Confetti from 'react-confetti'
import './styles.scss';

export default function Champions({ champions }) {
    return (
        <div className="champions">
            <h2>Champions</h2>
            <div className="champions-container">
                <Confetti
                    width={270}
                    height={270}
                />
                <div className="champions-trophy">
                    <img src="/img/trophy.png" alt="euros trophy" />
                </div>
                <Flag
                    name={champions.flag}
                    format="svg"
                    width={80}
                    basePath="/img/flags"
                    alt={`${champions.name} flag`} />
                <div className="champions-name">{champions.name}</div>
            </div>
        </div>
    )
}
