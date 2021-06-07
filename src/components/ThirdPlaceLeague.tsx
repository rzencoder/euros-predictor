export default function ThirdPlaceLeague({ teams, calculateThirdPlaceLeague }) {
    return (
        <div>
            {teams.map(team => {
                return <div onClick={() => calculateThirdPlaceLeague(team)}>{team.name}</div>
            })}
        </div>
    )
}
