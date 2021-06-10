import teams from './data/teams.json';
import data from './data/data.json';
import GroupStage from './components/GroupStage';
import ThirdPlaceLeague from './components/ThirdPlaceLeague';
import thirdPlaceChart from './data/thirdPlaceChart'
import './App.scss';
import { useEffect, useState } from 'react';
import Knockouts from './components/Knockouts';
import Champion from './components/Champion';
import Collapsible from 'react-collapsible';
import { groupScenario } from './data/groupScenario'
import { group } from 'console';

function App() {
  const [positions, setPositions] = useState(data);

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
    const teams = [...positions.thirdPositions];
    if (teams.some(el => el.name === team.name)) {
      if (teams[teams.length - 1].name === team.name) {
        teams.pop()
      } else {
        teams.length = 0;
      }
    } else {
      if (teams.length < 4) {
        teams.push(team)
      } else {
        teams.length = 0
      }

    }
    const newPositions = { ...positions }
    newPositions.secondRound[1] = null;
    newPositions.secondRound[5] = null;
    newPositions.secondRound[9] = null;
    newPositions.secondRound[13] = null;
    if (teams.length > 3) {
      teams.sort((a, b) => a.groupIndex - b.groupIndex)
      newPositions.thirdPositions = teams
      calculateThirdPlaceIntoKnockout(newPositions)
    } else {
      newPositions.thirdPositions = teams
      setPositions(newPositions)
    }

  }

  const calculateThirdPlaceIntoKnockout = (newPositions) => {
    let thirdPlaceGroups = newPositions.thirdPositions.map(el => el.groupIndex + 1).join("");
    const matches = thirdPlaceChart.find(el => el.group === thirdPlaceGroups)
    console.log(thirdPlaceGroups)
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

  // useEffect(() => {
  //  calculateSecondRound(positions)
  // }, [positions]);

  const encodeScenario = () => {
    let code = ""
    const groupTeams = (teams) => {
      var result = [];
      for (var i = 0; i < teams.length; i += 4) {
        result.push(teams.slice(i, i + 4));
      }
      return result;
    }

    const groupedTeams = groupTeams([...teams.teams])

    groupedTeams.forEach(((group, index) => {
      let num = ""
      group.forEach(team => {
        let pos = positions.groups[index].teams.findIndex(el => el.name === team.name) + 1
        if (pos === 0) pos = 4;
        num += String(pos)
      })
      const key = Object.keys(groupScenario).find(key => groupScenario[key] === num);
      code += key;
    }))
    const addTeamToCode = (round) => {
      positions[round].forEach(team => {
        let index = teams.teams.findIndex(el => el.name === team.name);
        console.log(index)
        code += String.fromCharCode(index + 97)
      })
    }
    addTeamToCode('thirdPositions')
    addTeamToCode('quarters')
    addTeamToCode('semis')
    addTeamToCode('final')
    addTeamToCode('champions')
    console.log(code)
    console.log(positions)
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
    const groupTeams = (teams) => {
      var result = [];
      for (var i = 0; i < teams.length; i += 4) {
        result.push(teams.slice(i, i + 4));
      }
      return result;
    }
    const groupedTeams = groupTeams([...teams.teams])
    const thirdPos = []
    groupNum.forEach((group, index) => {
      let groupPos = []
      group.forEach((el, elIndex) => {
        groupedTeams[index].forEach((team, teamIndex) => {
          if (el === String(teamIndex + 1) && elIndex !== 3) groupPos.push(team)
          if (el === String(teamIndex + 1) && elIndex === 2) thirdPos.push({ ...team, groupIndex: index })
        })
      })
      newPositions.groups[index].teams = groupPos
      newPositions.thirdTeams = thirdPos
    })
    const newPositions2 = calculateSecondRound(newPositions)

    const a = thirdsCode.map(el => {
      const team = teams.teams[el.charCodeAt(0) - 97]
      let groupIndex;
      groupedTeams.forEach((group, index) => {
        group.forEach(el => {
          if (el.name === team.name) {
            groupIndex = index;
          }
        })
      })
      return { ...team, groupIndex }
    })
    const knockoutDecoder = (round, code) => {
      const a = code.map(el => teams.teams[el.charCodeAt(0) - 97])
      newPositions2[round] = a;
    }

    knockoutDecoder("quarters", quartersCode)
    knockoutDecoder("semis", semisCode)
    knockoutDecoder("final", finalCode)
    knockoutDecoder("champions", championCode)
    newPositions2.thirdPositions = a

    calculateThirdPlaceIntoKnockout(newPositions2)
  }

  console.log(positions)
  return (
    <div className="App">
      <h1 className="title">Euro <span>2020</span> Predictor</h1>
      <Collapsible trigger="Group Stage" open>
        <GroupStage matches={positions.groups} teams={teams.teams} handleClick={handleGroupSelect} />
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
        </div>
      </Collapsible>
      <button onClick={() => { decodeScenario() }}>decode</button>
      <button onClick={() => { encodeScenario() }}>encode</button>
    </div>
  );
}

export default App;
