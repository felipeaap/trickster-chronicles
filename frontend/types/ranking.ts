export type Race =
  | "all"
  | "bunny"
  | "buffalo"
  | "raccoon"
  | "cat"
  | "sheep"
  | "lion"
  | "fox"
  | "dragon";

export type RankingTab = 
  | "level" 
  | "guild" 
  | "boss" 
  | "galders";
  
export interface Player {
  rank: number;
  name: string;
  race: Exclude<Race, "all">;
  avatar: string;
  jobIcon: string;
  guild: string;

  level: number;
  tmlv: number;

  exp: string;
  expPercent?: number;

  color?: string;
}