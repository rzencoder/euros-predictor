import teams from './data/teams.json';
import data from './data/data.json';
import GroupStage from './components/GroupStage';
import ThirdPlaceLeague from './components/ThirdPlaceLeague';
import thirdPlaceChart from './data/thirdPlaceChart'
import './App.css';
import { useEffect, useState } from 'react';
import Knockouts from './components/Knockouts';

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
    } else {
      group.push(team)
    }
    const newPositions = { ...positions };
    newPositions.groups[groupName].teams = group
    calculateSecondRound(newPositions)
  }

  const calculateSecondRound = (newPositions) => {
    newPositions.groups.forEach((group, groupIndex) => {
      newPositions.secondRound[group.winner] = ""
      newPositions.secondRound[group.second] = ""
      newPositions.thirdTeams[groupIndex] = ""
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
      teams.push(team)
    }
    const newPositions = { ...positions }
    newPositions.thirdPositions = teams
    console.log(teams.length)
    if (teams.length === 6) {
      calculateThirdPlaceIntoKnockout(newPositions)
    }
    setPositions(newPositions)
  }

  const calculateThirdPlaceIntoKnockout = (newPositions) => {
    console.log('hello')
    let thirdPlaceGroups = newPositions.thirdPositions.map(el => el.groupIndex + 1).join("");
    thirdPlaceGroups = thirdPlaceGroups.substring(0, thirdPlaceGroups.length - 2);
    const matches = thirdPlaceChart.find(el => el.group === thirdPlaceGroups)
    console.log(thirdPlaceGroups)
    console.log(matches)
    newPositions.thirdPositions.map((team, index) => {
      return newPositions.secondRound[matches.knockout[index]] = team
    })
    console.log(newPositions)
    setPositions(newPositions)
  }

  // useEffect(() => {
  //  calculateSecondRound(positions)
  // }, [positions]);

  console.log(positions)

  return (
    <div className="App">
      <GroupStage matches={positions.groups} teams={teams.teams} handleClick={handleGroupSelect} />
      {positions.thirdTeams.length === 6 && <ThirdPlaceLeague calculateThirdPlaceLeague={calculateThirdPlaceLeague} teams={positions.thirdTeams} />}
      <Knockouts teams={positions.secondRound} />
    </div>
  );
}

export default App;
