export const groupTeams = (teams) => {
  var result = [];
  for (var i = 0; i < teams.length; i += 4) {
    result.push(teams.slice(i, i + 4));
  }
  return result;
};
