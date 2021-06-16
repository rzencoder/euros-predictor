import { Rounds } from "./../types/Rounds";
import { groupScenario } from "./../data/groupScenario";
import { Team } from "./../types/Team";
import { Positions } from "./../types/Positions";
import { CodeScenario } from "./../types/CodeScenario";
import teamsData from "../data/teams.json";

export const encodeScenario = (positions: Positions, teams: Team[][]) => {
  // Converting the positions object to a string for use as a url parameter
  let code = "";
  //Loop through each group predicted positions and loop through the original positions of the teams. Store the original index as a number in the index of their predicted position
  positions.groups.forEach((group, index) => {
    let num = "";
    group.teams.forEach((team) => {
      let teamIndex = teams[index].findIndex((el) => el.name === team.name) + 1;
      num += String(teamIndex);
    });
    //Only three teams positions are predicted so find the missing team index and push to fourth position in the string
    for (let i = 1; i <= 4; i++) {
      if (!num.includes(String(i))) num += String(i);
    }

    // Find the corresponding single letter that matches the four digit string. Concat these to make a 6 character string
    const key = Object.keys(groupScenario).find(
      (key) => groupScenario[key.toString() as CodeScenario] === num
    );
    code += key;
  });

  // Loop through each round. Find the index of the predicted winners from their original place in the teamData array. Convert the index to a letter and concat to the code string
  const rounds = ["thirdPositions", "quarters", "semis", "final", "champions"];
  rounds.forEach((round) => {
    positions[round.toString() as Rounds].forEach((team) => {
      if (team) {
        let index = teamsData.teams.findIndex((el) => el.name === team.name);
        code += String.fromCharCode(index + 97);
      }
    });
  });
  return `https://rzencoder.github.io/euros-predictor?scenario=${code}`;
};
