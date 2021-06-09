export default function ThirdPlaceLeague({ teams, calculateThirdPlaceLeague, positions }) {
    const getRanking = (name) => {
        const index = positions.findIndex(el => el.name === name) + 1
        if (index === 0 && positions.length === 4) return "out"
        return index === 0 ? "+" : index < 5 ? "qualified" : "out"
    }
    console.log(teams)
    return (
        <div>
            <h2>Third Place League</h2>
            {teams.map(team => {
                return (
                    <div className="third-place-team" onClick={() => calculateThirdPlaceLeague(team)}>
                        <div>{team.name}</div>
                        <div>{getRanking(team.name)}</div>
                    </div>
                )
            })}
        </div>
    )
}
