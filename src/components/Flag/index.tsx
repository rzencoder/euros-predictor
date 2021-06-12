import './styles.scss'

export default function Flag({ team, width = "50px" }) {
    return (
        <img style={{ width }} src={`euros-predictor/img/flags/${team.flag}.svg`}
            alt={`${team.name} flag`} />
    )
}
