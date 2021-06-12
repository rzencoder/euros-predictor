import { useEffect, useState } from 'react';
import { GroupStage, ThirdPlaceLeague, Knockouts, Champions } from './components';
import teamsData from './data/teams.json';
import data from './data/data.json';
import thirdPlaceChart from './data/thirdPlaceChart'
import { groupScenario } from './data/groupScenario'
import Collapsible from 'react-collapsible';
import { groupTeams } from './utils';

function App() {
  const [positions, setPositions] = useState(data);
  const [teams] = useState(groupTeams(teamsData.teams));
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let scenarioString = params.get('scenario');
    if (scenarioString && scenarioString.length === 25)
      decodeScenario(scenarioString)
  }, []);

  const handleGroupSelect = (team, groupName) => {
    const group = [...positions.groups[groupName].teams]
    if (group.some(el => el.name === team.name)) {
      if (group[group.length - 1].name === team.name) {
        group.pop()
      } else {
        group.length = 0;
      }
    } else if (group.length === 3) {
      group.length = 0;
    } else {
      group.push(team)
    }
    const newPositions = { ...positions };

    newPositions.groups[groupName].teams = group
    calculateSecondRound(newPositions)
  }

  const calculateSecondRound = (newPositions) => {
    newPositions.groups.forEach((group, groupIndex) => {
      newPositions.secondRound[group.winner] = null
      newPositions.secondRound[group.second] = null
      newPositions.thirdTeams[groupIndex] = null
      group.teams.forEach((team, index) => {
        if (index === 0) {
          newPositions.secondRound[group.winner] = team
        } else if (index === 1) {
          newPositions.secondRound[group.second] = team
        } else if (index === 2) {
          newPositions.thirdTeams[groupIndex] = { ...team, groupIndex }
        }
      })
    })
    setPositions(newPositions)
    return newPositions
  }

  const calculateThirdPlaceLeague = (team) => {
    const thirdTeams = [...positions.thirdPositions];
    if (thirdTeams.some(el => el.name === team.name)) {
      if (thirdTeams[thirdTeams.length - 1].name === team.name) {
        thirdTeams.pop()
      } else {
        thirdTeams.length = 0;
      }
    } else {
      if (thirdTeams.length < 4) {
        thirdTeams.push(team)
      } else {
        thirdTeams.length = 0
      }
    }

    const newPositions = { ...positions }
    newPositions.secondRound[1] = null;
    newPositions.secondRound[5] = null;
    newPositions.secondRound[9] = null;
    newPositions.secondRound[13] = null;

    if (thirdTeams.length > 3) {
      thirdTeams.sort((a, b) => a.groupIndex - b.groupIndex)
      newPositions.thirdPositions = thirdTeams
      calculateThirdPlaceIntoKnockout(newPositions)
    } else {
      newPositions.thirdPositions = thirdTeams
      setPositions(newPositions)
    }
  }

  const calculateThirdPlaceIntoKnockout = (newPositions) => {
    let thirdPlaceGroups = newPositions.thirdPositions.map(el => el.groupIndex + 1).join("");
    const matches = thirdPlaceChart.find(el => el.group === thirdPlaceGroups)
    newPositions.thirdPositions.map((team, index) => {
      return newPositions.secondRound[matches.knockout[index]] = team
    })
    setPositions(newPositions)
  }

  const handleKnockoutClick = (team, index, round) => {
    const newPositions = { ...positions }
    newPositions[round][index] = team
    setPositions(newPositions)
  }

  const encodeScenario = () => {
    let code = ""
    positions.groups.forEach(((group, index) => {
      let num = ""
      group.teams.forEach(team => {
        let pos = teams[index].findIndex(el => el.name === team.name) + 1
        num += String(pos)
      })
      if (!num.includes("1")) num += "1"
      if (!num.includes("2")) num += "2"
      if (!num.includes("3")) num += "3"
      if (!num.includes("4")) num += "4"
      console.log(num)
      const key = Object.keys(groupScenario).find(key => groupScenario[key] === num);
      code += key;

    }))

    const addTeamToCode = (round) => {
      positions[round].forEach(team => {
        let index = teamsData.teams.findIndex(el => el.name === team.name);
        code += String.fromCharCode(index + 97)
      })
    }
    addTeamToCode('thirdPositions')
    addTeamToCode('quarters')
    addTeamToCode('semis')
    addTeamToCode('final')
    addTeamToCode('champions')
    return `rzencoder.github.io/euros-predictor?scenario=${code}`;
  }

  const decodeScenario = (code = "xxxxxxjnrvvkjsnwrgkswgsgg") => {
    const groupCode = code.substring(0, 6).split('')
    const thirdsCode = code.substring(6, 10).split('')
    const quartersCode = code.substring(10, 18).split('')
    const semisCode = code.substring(18, 22).split('')
    const finalCode = code.substring(22, 24).split('')
    const championCode = code.substring(24, 25).split('')
    const newPositions = { ...positions }
    const groupNum = groupCode.map(el => groupScenario[el].split(''));
    const thirdPos = []

    groupNum.forEach((group, index) => {
      let groupPos = []
      group.forEach((el, elIndex) => {
        teams[index].forEach((team, teamIndex) => {
          if (el === String(teamIndex + 1) && elIndex !== 3) groupPos.push(team)
          if (el === String(teamIndex + 1) && elIndex === 2) thirdPos.push({ ...team, groupIndex: index })
        })
      })
      console.log(groupPos)
      newPositions.groups[index].teams = groupPos
      newPositions.thirdTeams = thirdPos
    })
    const newPositions2 = calculateSecondRound(newPositions)

    const a = thirdsCode.map(el => {
      const team = teamsData.teams[el.charCodeAt(0) - 97]
      let groupIndex;
      teams.forEach((group, index) => {
        group.forEach(el => {
          if (el.name === team.name) {
            groupIndex = index;
          }
        })
      })
      return { ...team, groupIndex }
    })

    const knockoutDecoder = (round, code) => {
      const a = code.map(el => teamsData.teams[el.charCodeAt(0) - 97])
      newPositions2[round] = a;
    }

    knockoutDecoder("quarters", quartersCode)
    knockoutDecoder("semis", semisCode)
    knockoutDecoder("final", finalCode)
    knockoutDecoder("champions", championCode)
    newPositions2.thirdPositions = a
    calculateThirdPlaceIntoKnockout(newPositions2)
  }

  return (
    <div className="container">
      <h1 className="title">Euro <span>2020</span> Predictor</h1>
      <Collapsible trigger="Group Stage" open>
        <GroupStage matches={positions.groups} teams={teams} handleClick={handleGroupSelect} />
      </Collapsible>
      <Collapsible trigger="Third Place Rating" open>
        {!positions.thirdTeams.some(el => el === null) &&
          (<div>
            <ThirdPlaceLeague calculateThirdPlaceLeague={calculateThirdPlaceLeague} teams={positions.thirdTeams} positions={positions.thirdPositions} />
          </div>
          )}
      </Collapsible>
      <Collapsible trigger="Knockout Stage" open>
        <div className="knockout-container">
          <Knockouts teams={positions.secondRound} handleClick={handleKnockoutClick} nextRound="quarters" title="Round of 16" roundIndex="1" positions={positions} />
          <Knockouts teams={positions.quarters} handleClick={handleKnockoutClick} nextRound="semis" title="Quarter Finals" roundIndex="2" positions={positions} />
          <Knockouts teams={positions.semis} handleClick={handleKnockoutClick} nextRound="final" title="Semi Finals" roundIndex="3" positions={positions} />
          <Knockouts teams={positions.final} handleClick={handleKnockoutClick} nextRound="champions" title="Final" roundIndex="4" positions={positions} />
          {positions.champions[0] && <Champions champions={positions.champions[0]} />}
        </div>
      </Collapsible>
      {positions.champions[0] && <button className="share" onClick={() => setShowShare(true)}>
        Share
      </button>
      }
      {showShare && <div className="modal-overlay" onClick={() => setShowShare(false)}>
        <div className="modal" onClick={() => setShowShare(true)}>
          <div className="modal-container">
            <button className="close" onClick={() => setShowShare(false)}>&#x2716;</button>
            <div className="modal-link">{encodeScenario()}</div>
            <button className="copy" onClick={() => navigator.clipboard.writeText(encodeScenario())}>Copy Link</button>
          </div>
        </div>
      </div>}
      {/* <button onClick={() => { decodeScenario() }}>decode</button> */}
    </div>
  );
}

export default App;
