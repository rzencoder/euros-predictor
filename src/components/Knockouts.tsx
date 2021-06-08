export default function Knockouts({ teams, handleClick, nextRound }) {
    console.log('here')
    const formatTeams = () => {
        const res = [];
        for (let i = 0; i < teams.length; i += 2) {
            res.push([teams[i], teams[i + 1]])
        }
        return res
    }
    const formattedTeams = formatTeams(teams)
    return (
        <div className="flex">
            {formattedTeams.map((match, index) => {
                return (
                    <div>
                        {match[0] && <div onClick={() => handleClick(match[0], index, nextRound)}>{match[0].name}</div>}
                        <div>v</div>
                        {match[1] && <div onClick={() => handleClick(match[1], index, nextRound)}>{match[1].name}</div>}
                    </div>
                )
            })}
        </div>
    )
}
