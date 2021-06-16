import { Team } from "./../types/Team";
export const getGroupRanking = (name: string, teams: Team[]) => {
  const index = teams.findIndex((el) => el.name === name) + 1;
  if (index === 0 && teams.length === 3) return "out";
  if (index === 0) return "+";
  if (index === 1) return "1st";
  if (index === 2) return "2nd";
  if (index === 3) return "3rd";
};
