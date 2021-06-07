export default function Knockouts({ teams }) {
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
            {formattedTeams.map(match => {
                return (
                    <div>
                        <div>{match[0].name}</div>
                        <div>v</div>
                        <div>{match[1].name}</div>
                    </div>
                )
            })}
        </div>
    )
}
