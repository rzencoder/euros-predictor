import { groupScenario } from "../data/groupScenario";
import teamsData from "../data/teams.json";

// Converting the url query from string back into an object containing the predictions for that scenario
export const decodeScenario = (
  code,
  newPositions,
  teams,
  calculateSecondRound,
  calculateThirdPlaceIntoKnockout
) => {
  //Split the code by rounds
  const groupCode = code.substring(0, 6).split("");
  const thirdsCode = code.substring(6, 10).split("");
  const quartersCode = ["quarters", code.substring(10, 18).split("")];
  const semisCode = ["semis", code.substring(18, 22).split("")];
  const finalCode = ["final", code.substring(22, 24).split("")];
  const championsCode = ["champions", code.substring(24, 25).split("")];
  const knockoutCodes = [quartersCode, semisCode, finalCode, championsCode];

  // Convert the group code from a letter into a four number string containing the index of a team with the index being the position they have been predicted to finish
  const groupNum = groupCode.map((el) => groupScenario[el].split(""));
  const thirdPos = [];

  // Loop through the four number string for each group and find the index of the team from their original start position in the group
  groupNum.forEach((group, index) => {
    let groupPos = [];
    group.forEach((el, elIndex) => {
      teams[index].forEach((team, teamIndex) => {
        // Push the team to the array apart from the fourth placed team which this isn't required for. Also add the third place team to an additional array for the third place league
        if (el === String(teamIndex + 1) && elIndex !== 3) groupPos.push(team);
        if (el === String(teamIndex + 1) && elIndex === 2)
          thirdPos.push({ ...team, groupIndex: index });
      });
    });
    newPositions.groups[index].teams = groupPos;
    newPositions.thirdTeams = thirdPos;
  });

  const newPositions2 = calculateSecondRound(newPositions);

  const decodedThirdPlaces = thirdsCode.map((el) => {
    const team = teamsData.teams[el.charCodeAt(0) - 97];
    let groupIndex;
    teams.forEach((group, index) => {
      group.forEach((el) => {
        if (el.name === team.name) {
          groupIndex = index;
        }
      });
    });
    return { ...team, groupIndex };
  });

  newPositions2.thirdPositions = decodedThirdPlaces;

  knockoutCodes.forEach((code) => {
    const decodedKnockoutRound = code[1].map(
      (el) => teamsData.teams[el.charCodeAt(0) - 97]
    );
    newPositions2[code[0]] = decodedKnockoutRound;
  });

  calculateThirdPlaceIntoKnockout(newPositions2);
};
