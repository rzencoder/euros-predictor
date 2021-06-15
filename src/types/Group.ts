import { Team } from "./Team";

export interface Group {
  name: string;
  teams: Team[];
  winner: number;
  second: number;
}
