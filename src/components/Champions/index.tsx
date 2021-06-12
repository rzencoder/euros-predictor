import Confetti from 'react-confetti'
import { Flag } from '..';
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
                    <img src="/euros-predictor/img/trophy.png" alt="euros trophy" />
                </div>
                <Flag
                    team={champions}
                    width="80px" />
                <div className="champions-name">{champions.name}</div>
            </div>
        </div>
    )
}