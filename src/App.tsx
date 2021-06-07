import teams from './data/teams.json';
import data from './data/data.json';
import GroupStage from './components/GroupStage';
import './App.css';
import { useEffect, useState } from 'react';

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
          newPositions.thirdTeams[groupIndex] = team
        }
      })
    })
    setPositions(newPositions)
  }

  // useEffect(() => {
  //  calculateSecondRound(positions)
  // }, [positions]);
  console.log(positions)
  return (
    <div className="App">
      <GroupStage matches={positions.groups} teams={teams.teams} handleClick={handleGroupSelect} />
    </div>
  );
}

export default App;
