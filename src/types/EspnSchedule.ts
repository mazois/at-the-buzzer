export interface ESPNScheduleResponse {
  team: {
    id: string;
    abbreviation: string;
    displayName: string;
    recordSummary: string; // "37-24"
    standingSummary: string; // "6th in Western Conference"
  };
  events: ESPNScheduleEvent[];
}

export const enum GameState {
  PRE = 'pre',
  IN_PROGRESS = 'in',
  POST = 'post',
}

export const enum HomeAwayType {
  HOME = 'home',
  AWAY = 'away',
}

export interface ESPNScheduleEvent {
  id: string;
  date: string; // ISO "2026-03-05T00:30Z"
  name: string; // "Los Angeles Lakers at Denver Nuggets"
  shortName: string; // "LAL @ DEN"
  competitions: {
    competitors: {
      homeAway: HomeAwayType;
      team: {
        abbreviation: string;
        displayName: string;
        logo: string;
        color: string;
      };
      score: { value: number; displayValue: string };
      record: { displayValue: string }[];
    }[];
    status: {
      type: {
        state: GameState;
        completed: boolean;
        description: string;
        shortDetail: string; // "Final", "Q3 4:32", "3/5 - 7:30 PM ET"
      };
      period: number;
      displayClock: string;
    };
    broadcasts: { market: string; names: string[] }[];
  }[];
}

export interface ScoreboardCompetitor {
  homeAway: "home" | "away";
  team: {
    abbreviation: string;
    displayName: string;
  };
  score: string;
}

export interface ScoreboardEvent {
  id: string;
  competitions: {
    competitors: ScoreboardCompetitor[];
    status: {
      type: {
        state: "pre" | "in" | "post";
        shortDetail: string; // "Q3 4:32" or "Final" or "7:30 PM ET"
      };
      period: number;
      displayClock: string;
    };
  }[];
}

export interface ScoreboardResponse {
  events: ScoreboardEvent[];
}