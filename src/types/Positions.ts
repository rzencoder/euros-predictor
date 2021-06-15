import { Team } from "./Team";
import { Group } from "./Group";

export interface Positions {
  groups: Group[];
  thirdTeams: (Team | null)[];
  thirdPositions: (Team | null)[];
  secondRound: (Team | null)[];
  quarters: (Team | null)[];
  semis: (Team | null)[];
  final: (Team | null)[];
  champions: (Team | null)[];
}
