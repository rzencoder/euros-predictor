export const formatKnockoutTeams = (teams) => {
  const res = [];
  for (let i = 0; i < teams.length; i += 2) {
    res.push([teams[i], teams[i + 1]]);
  }
  return res;
};
