import Flag from "react-flags";

export default function ThirdPlaceLeague({ teams, calculateThirdPlaceLeague, positions }) {
    const getRanking = (name) => {
        const index = positions.findIndex(el => el.name === name) + 1
        if (index === 0 && positions.length === 4) return <div className="cross">&#x2716;</div>
        return index === 0 ? "" : index < 5 ? <div className="tick">&#x2714;</div> : <div className="cross">&#x2716;</div>
    }
    console.log(teams)
    return (
        <div className="third-place-league">
            {teams.map(team => {
                return (
                    <div className="third-place-container" onClick={() => calculateThirdPlaceLeague(team)}>
                        <div className="third-place-team">
                            <Flag
                                name={team.flag}
                                format="svg"
                                width="50"
                                basePath="/img/flags"
                                alt={`${team.name} flag`} />
                            <div><div>{team.name}</div></div>
                        </div>
                        <div className="third-place-selector"><div>{getRanking(team.name)}</div></div>
                    </div>
                )
            })}
        </div>
    )
}
