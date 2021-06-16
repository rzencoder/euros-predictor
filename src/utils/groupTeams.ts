import { Team } from "./../types/Team";
export const groupTeams = (teams: Team[]) => {
  var result = [];
  for (var i = 0; i < teams.length; i += 4) {
    result.push(teams.slice(i, i + 4));
  }
  return result;
};
