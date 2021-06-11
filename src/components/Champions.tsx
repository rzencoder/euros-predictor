import Flag from "react-flags";
import Confetti from 'react-confetti'

export default function Champions({ champions }) {
    return (
        <div className="champions">
            <h2>Champions</h2>
            <div className="champions-container">
                <Confetti
                    width="270px"
                    height="270px"
                />
                <div className="champions-trophy">
                    <img src="/img/trophy.png" alt="euros trophy" />
                </div>
                <Flag
                    name={champions.flag}
                    format="svg"
                    width="80"
                    basePath="/img/flags"
                    alt={`${champions.name} flag`} />
                <div className="champions-name">{champions.name}</div>
            </div>
        </div>
    )
}
