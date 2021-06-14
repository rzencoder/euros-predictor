import { encodeScenario } from '../../utils';
import './styles.scss';

export default function Share({ setShowShare, positions, teams }) {
    const url = encodeScenario(positions, teams);
    return (
        <div className="modal-overlay" onClick={() => setShowShare(false)}>
            <div className="modal" onClick={() => setShowShare(true)}>
                <div className="modal-container">
                    <button className="close" onClick={() => setShowShare(false)}>&#x2716;</button>
                    <div className="modal-link">{url}</div>
                    <button className="copy" onClick={() => navigator.clipboard.writeText(url)}>Copy Link</button>
                </div>
            </div>
        </div>
    )
}
