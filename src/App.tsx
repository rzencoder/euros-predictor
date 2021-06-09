import teams from './data/teams.json';
import data from './data/data.json';
import GroupStage from './components/GroupStage';
import ThirdPlaceLeague from './components/ThirdPlaceLeague';
import thirdPlaceChart from './data/thirdPlaceChart'
import './App.css';
import { useEffect, useState } from 'react';
import Knockouts from './components/Knockouts';
import Champion from './components/Champion';

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

  console.log(positions)
  return (
    <div className="App">
      <h1 className="title">Euro <span>2020</span> Predictor</h1>
      <GroupStage matches={positions.groups} teams={teams.teams} handleClick={handleGroupSelect} />
      {!positions.thirdTeams.some(el => el === null) && <ThirdPlaceLeague calculateThirdPlaceLeague={calculateThirdPlaceLeague} teams={positions.thirdTeams} positions={positions.thirdPositions} />}
      <div className="knockout-container">
        <Knockouts teams={positions.secondRound} handleClick={handleKnockoutClick} nextRound="quarters" title="Round of 16" roundIndex="1" positions={positions} />
        <Knockouts teams={positions.quarters} handleClick={handleKnockoutClick} nextRound="semis" title="Quarter Finals" roundIndex="2" positions={positions} />
        <Knockouts teams={positions.semis} handleClick={handleKnockoutClick} nextRound="final" title="Semi Finals" roundIndex="3" positions={positions} />
        <Knockouts teams={positions.final} handleClick={handleKnockoutClick} nextRound="champions" title="Final" roundIndex="4" positions={positions} />

      </div>
    </div>
  );
}

export default App;
