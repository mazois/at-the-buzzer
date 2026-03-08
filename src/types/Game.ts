export type GameStatus = 'final' | 'live' | 'upcoming';

export interface Competitor {
  team: {
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    logo: string; // ESPN CDN URL pattern
    color: string;
    alternateColor: string;
  };
  homeAway: 'home' | 'away';
  score: string;
  records?: { summary: string }[];
}

export interface Game {
  id: string;
  date: string; // ISO date "2026-03-01T00:00Z"
  name: string; // "San Antonio Spurs at Los Angeles Lakers"
  shortName: string; // "SAS @ LAL"
  status: {
    type: {
      state: GameStatus; // "pre" | "in" | "post" → mapped to upcoming/live/final
      completed: boolean;
      description: string; // "Final", "In Progress", "Scheduled"
      shortDetail: string; // "Final", "Q3 4:32", "3/5 - 7:30 PM ET"
    };
    period: number; // quarter number
    displayClock: string; // "4:32"
  };
  competitions: {
    competitors: Competitor[];
    broadcast?: string;
  };
}

// Simplified version for our app
export interface SimpleGame {
  id: string;
  date: string; // "2026-03-05"
  time: string; // "7:30 PM"
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  status: GameStatus;
  quarter?: string;
  clock?: string;
  broadcast?: string;
}
