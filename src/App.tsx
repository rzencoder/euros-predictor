import { useEffect, useState } from 'react';
import { GroupStage, ThirdPlaceLeague, Knockouts, Champions, Share } from './components';
import teamsData from './data/teams.json';
import data from './data/data.json';
import thirdPlaceChart from './data/thirdPlaceChart'
import Collapsible from 'react-collapsible';
import { decodeScenario, groupTeams } from './utils';

function App() {
  const [positions, setPositions] = useState(data);
  const [teams] = useState(groupTeams(teamsData.teams));
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let scenarioString = params.get('scenario');
    if (scenarioString && scenarioString.length === 25)
      decodeScenario(scenarioString, { ...positions }, teams, calculateSecondRound, calculateThirdPlaceIntoKnockout)
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
      {showShare && <Share setShowShare={setShowShare} positions={positions} teams={teams} />}
    </div>
  );
}

export default App;
