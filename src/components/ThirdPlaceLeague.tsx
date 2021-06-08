export default function ThirdPlaceLeague({ teams, calculateThirdPlaceLeague, positions }) {
    const getRanking = (name) => {
        const index = positions.findIndex(el => el.name === name) + 1
        if (index === 0 && positions.length === 4) return "out"
        return index === 0 ? "+" : index < 5 ? "qualified" : "out"
    }
    console.log(teams)
    return (
        <div>
            {teams.map(team => {
                return (
                    <div onClick={() => calculateThirdPlaceLeague(team)}>
                        <div>{team.name}</div>
                        <div>{getRanking(team.name)}</div>
                    </div>
                )
            })}
        </div>
    )
}
