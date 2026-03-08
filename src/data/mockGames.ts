import type { SimpleGame } from '@/types/Game';

export const MOCK_GAMES: SimpleGame[] = [
  // ==================== LOS ANGELES LAKERS (37-24) ====================
  // March 1 - vs Portland (Home)
  {
    id: 'lal-1',
    date: '2026-03-01',
    time: '7:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'POR',
    homeScore: 121,
    awayScore: 108,
    status: 'final',
  },
  // March 3 - vs Sacramento (Home)
  {
    id: 'lal-2',
    date: '2026-03-03',
    time: '7:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'SAC',
    homeScore: 134,
    awayScore: 112,
    status: 'final',
  },
  // March 5 - at Denver
  {
    id: 'lal-3',
    date: '2026-03-05',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 6 - vs Indiana (Home)
  {
    id: 'lal-4',
    date: '2026-03-06',
    time: '7:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'IND',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ESPN',
  },
  // March 8 - vs New York (Home) - Sunday
  {
    id: 'lal-5',
    date: '2026-03-08',
    time: '12:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'NYK',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ABC',
  },
  // March 10 - vs Minnesota (Home)
  {
    id: 'lal-6',
    date: '2026-03-10',
    time: '8:00 PM',
    homeTeam: 'LAL',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 12 - vs Chicago (Home)
  {
    id: 'lal-7',
    date: '2026-03-12',
    time: '7:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'CHI',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 14 - vs Denver (Home) - Saturday
  {
    id: 'lal-8',
    date: '2026-03-14',
    time: '5:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ABC',
  },
  // March 17 - at Houston
  {
    id: 'lal-9',
    date: '2026-03-17',
    time: '7:00 PM',
    homeTeam: 'HOU',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 18 - at Houston
  {
    id: 'lal-10',
    date: '2026-03-18',
    time: '7:00 PM',
    homeTeam: 'HOU',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 20 - at Miami
  {
    id: 'lal-11',
    date: '2026-03-20',
    time: '7:30 PM',
    homeTeam: 'MIA',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 22 - at Orlando
  {
    id: 'lal-12',
    date: '2026-03-22',
    time: '6:00 PM',
    homeTeam: 'ORL',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 24 - at Detroit
  {
    id: 'lal-13',
    date: '2026-03-24',
    time: '7:00 PM',
    homeTeam: 'DET',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 26 - at Indiana
  {
    id: 'lal-14',
    date: '2026-03-26',
    time: '7:00 PM',
    homeTeam: 'IND',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 28 - vs Phoenix (Home)
  {
    id: 'lal-15',
    date: '2026-03-28',
    time: '7:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'PHX',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 30 - vs Golden State (Home)
  {
    id: 'lal-16',
    date: '2026-03-30',
    time: '7:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'GSW',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ESPN',
  },
  // March 31 - at Portland
  {
    id: 'lal-17',
    date: '2026-03-31',
    time: '7:00 PM',
    homeTeam: 'POR',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },

  // ==================== OKLAHOMA CITY THUNDER (48-15) ====================
  // March 1 - at Charlotte
  {
    id: 'okc-1',
    date: '2026-03-01',
    time: '5:00 PM',
    homeTeam: 'CHA',
    awayTeam: 'OKC',
    homeScore: 96,
    awayScore: 118,
    status: 'final',
  },
  // March 3 - at Atlanta
  {
    id: 'okc-2',
    date: '2026-03-03',
    time: '7:30 PM',
    homeTeam: 'ATL',
    awayTeam: 'OKC',
    homeScore: 105,
    awayScore: 127,
    status: 'final',
  },
  // March 4 - at New York
  {
    id: 'okc-3',
    date: '2026-03-04',
    time: '7:30 PM',
    homeTeam: 'NYK',
    awayTeam: 'OKC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ESPN',
  },
  // March 7 - vs Golden State (Home)
  {
    id: 'okc-4',
    date: '2026-03-07',
    time: '7:30 PM',
    homeTeam: 'OKC',
    awayTeam: 'GSW',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 9 - vs Denver (Home)
  {
    id: 'okc-5',
    date: '2026-03-09',
    time: '6:30 PM',
    homeTeam: 'OKC',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ESPN',
  },
  // March 12 - vs Boston (Home)
  {
    id: 'okc-6',
    date: '2026-03-12',
    time: '8:30 PM',
    homeTeam: 'OKC',
    awayTeam: 'BOS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ESPN',
  },
  // March 15 - vs Minnesota (Home) - Sunday
  {
    id: 'okc-7',
    date: '2026-03-15',
    time: '12:00 PM',
    homeTeam: 'OKC',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ABC',
  },
  // March 17 - at Orlando
  {
    id: 'okc-8',
    date: '2026-03-17',
    time: '7:00 PM',
    homeTeam: 'ORL',
    awayTeam: 'OKC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 18 - at Brooklyn
  {
    id: 'okc-9',
    date: '2026-03-18',
    time: '7:30 PM',
    homeTeam: 'BKN',
    awayTeam: 'OKC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 20 - at Washington
  {
    id: 'okc-10',
    date: '2026-03-20',
    time: '7:00 PM',
    homeTeam: 'WAS',
    awayTeam: 'OKC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 22 - at Philadelphia
  {
    id: 'okc-11',
    date: '2026-03-22',
    time: '6:00 PM',
    homeTeam: 'PHI',
    awayTeam: 'OKC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 24 - at Boston
  {
    id: 'okc-12',
    date: '2026-03-24',
    time: '7:30 PM',
    homeTeam: 'BOS',
    awayTeam: 'OKC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ESPN',
  },
  // March 26 - at Boston (back-to-back East trip)
  {
    id: 'okc-13',
    date: '2026-03-26',
    time: '7:30 PM',
    homeTeam: 'BOS',
    awayTeam: 'OKC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 28 - vs Dallas (Home)
  {
    id: 'okc-14',
    date: '2026-03-28',
    time: '7:00 PM',
    homeTeam: 'OKC',
    awayTeam: 'DAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 30 - vs San Antonio (Home)
  {
    id: 'okc-15',
    date: '2026-03-30',
    time: '7:00 PM',
    homeTeam: 'OKC',
    awayTeam: 'SAS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },

  // ==================== SAN ANTONIO SPURS (43-17) ====================
  // March 1 - at Cleveland
  {
    id: 'sas-1',
    date: '2026-03-01',
    time: '5:00 PM',
    homeTeam: 'CLE',
    awayTeam: 'SAS',
    homeScore: 101,
    awayScore: 113,
    status: 'final',
  },
  // March 3 - at Philadelphia
  {
    id: 'sas-2',
    date: '2026-03-03',
    time: '8:00 PM',
    homeTeam: 'PHI',
    awayTeam: 'SAS',
    homeScore: 98,
    awayScore: 107,
    status: 'final',
  },
  // March 5 - vs Detroit (Home)
  {
    id: 'sas-3',
    date: '2026-03-05',
    time: '7:00 PM',
    homeTeam: 'SAS',
    awayTeam: 'DET',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 8 - vs Houston (Home) - Sunday
  {
    id: 'sas-4',
    date: '2026-03-08',
    time: '7:00 PM',
    homeTeam: 'SAS',
    awayTeam: 'HOU',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 10 - vs Milwaukee (Home)
  {
    id: 'sas-5',
    date: '2026-03-10',
    time: '7:30 PM',
    homeTeam: 'SAS',
    awayTeam: 'MIL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 12 - vs Minnesota (Home)
  {
    id: 'sas-6',
    date: '2026-03-12',
    time: '7:30 PM',
    homeTeam: 'SAS',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 14 - vs Utah (Home)
  {
    id: 'sas-7',
    date: '2026-03-14',
    time: '7:00 PM',
    homeTeam: 'SAS',
    awayTeam: 'UTA',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 16 - at Houston
  {
    id: 'sas-8',
    date: '2026-03-16',
    time: '7:00 PM',
    homeTeam: 'HOU',
    awayTeam: 'SAS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 18 - vs New Orleans (Home)
  {
    id: 'sas-9',
    date: '2026-03-18',
    time: '7:30 PM',
    homeTeam: 'SAS',
    awayTeam: 'NOP',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 20 - vs Orlando (Home)
  {
    id: 'sas-10',
    date: '2026-03-20',
    time: '7:30 PM',
    homeTeam: 'SAS',
    awayTeam: 'ORL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 22 - at Dallas
  {
    id: 'sas-11',
    date: '2026-03-22',
    time: '7:30 PM',
    homeTeam: 'DAL',
    awayTeam: 'SAS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 25 - at New York
  {
    id: 'sas-12',
    date: '2026-03-25',
    time: '7:30 PM',
    homeTeam: 'NYK',
    awayTeam: 'SAS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 27 - at Toronto
  {
    id: 'sas-13',
    date: '2026-03-27',
    time: '7:30 PM',
    homeTeam: 'TOR',
    awayTeam: 'SAS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 29 - at Brooklyn
  {
    id: 'sas-14',
    date: '2026-03-29',
    time: '6:00 PM',
    homeTeam: 'BKN',
    awayTeam: 'SAS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 30 - at OKC
  {
    id: 'sas-15',
    date: '2026-03-30',
    time: '7:00 PM',
    homeTeam: 'OKC',
    awayTeam: 'SAS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },

  // ==================== DENVER NUGGETS (38-24) ====================
  // March 1 - vs Phoenix (Home)
  {
    id: 'den-1',
    date: '2026-03-01',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'PHX',
    homeScore: 128,
    awayScore: 119,
    status: 'final',
  },
  // March 3 - vs Cleveland (Home)
  {
    id: 'den-2',
    date: '2026-03-03',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'CLE',
    homeScore: 115,
    awayScore: 121,
    status: 'final',
  },
  // March 5 - vs Los Angeles Lakers (Home)
  {
    id: 'den-3',
    date: '2026-03-05',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'LAL',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ESPN',
  },
  // March 7 - at Utah
  {
    id: 'den-4',
    date: '2026-03-07',
    time: '7:00 PM',
    homeTeam: 'UTA',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 9 - at OKC
  {
    id: 'den-5',
    date: '2026-03-09',
    time: '6:30 PM',
    homeTeam: 'OKC',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ESPN',
  },
  // March 11 - at Dallas
  {
    id: 'den-6',
    date: '2026-03-11',
    time: '7:30 PM',
    homeTeam: 'DAL',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 13 - at Memphis
  {
    id: 'den-7',
    date: '2026-03-13',
    time: '8:00 PM',
    homeTeam: 'MEM',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 14 - at Los Angeles Lakers
  {
    id: 'den-8',
    date: '2026-03-14',
    time: '5:30 PM',
    homeTeam: 'LAL',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ABC',
  },
  // March 17 - vs Portland (Home)
  {
    id: 'den-9',
    date: '2026-03-17',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'POR',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 19 - vs Sacramento (Home)
  {
    id: 'den-10',
    date: '2026-03-19',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'SAC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 21 - vs Chicago (Home)
  {
    id: 'den-11',
    date: '2026-03-21',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'CHI',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 23 - at Minnesota
  {
    id: 'den-12',
    date: '2026-03-23',
    time: '7:00 PM',
    homeTeam: 'MIN',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 25 - at Milwaukee
  {
    id: 'den-13',
    date: '2026-03-25',
    time: '7:00 PM',
    homeTeam: 'MIL',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 27 - at Cleveland
  {
    id: 'den-14',
    date: '2026-03-27',
    time: '7:30 PM',
    homeTeam: 'CLE',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 29 - vs Washington (Home)
  {
    id: 'den-15',
    date: '2026-03-29',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'WAS',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 31 - vs Minnesota (Home)
  {
    id: 'den-16',
    date: '2026-03-31',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },

  // ==================== MINNESOTA TIMBERWOLVES (38-23) ====================
  // March 1 - vs Toronto (Home)
  {
    id: 'min-1',
    date: '2026-03-01',
    time: '7:00 PM',
    homeTeam: 'MIN',
    awayTeam: 'TOR',
    homeScore: 122,
    awayScore: 104,
    status: 'final',
  },
  // March 3 - vs Memphis (Home)
  {
    id: 'min-2',
    date: '2026-03-03',
    time: '7:00 PM',
    homeTeam: 'MIN',
    awayTeam: 'MEM',
    homeScore: 117,
    awayScore: 109,
    status: 'final',
  },
  // March 5 - at Milwaukee
  {
    id: 'min-3',
    date: '2026-03-05',
    time: '7:00 PM',
    homeTeam: 'MIL',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 7 - at Chicago
  {
    id: 'min-4',
    date: '2026-03-07',
    time: '7:00 PM',
    homeTeam: 'CHI',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 9 - at Washington
  {
    id: 'min-5',
    date: '2026-03-09',
    time: '6:00 PM',
    homeTeam: 'WAS',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 10 - at Los Angeles Lakers
  {
    id: 'min-6',
    date: '2026-03-10',
    time: '8:00 PM',
    homeTeam: 'LAL',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 12 - at San Antonio
  {
    id: 'min-7',
    date: '2026-03-12',
    time: '7:30 PM',
    homeTeam: 'SAS',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 15 - at OKC - Sunday
  {
    id: 'min-8',
    date: '2026-03-15',
    time: '12:00 PM',
    homeTeam: 'OKC',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    broadcast: 'ABC',
  },
  // March 17 - vs Sacramento (Home)
  {
    id: 'min-9',
    date: '2026-03-17',
    time: '7:00 PM',
    homeTeam: 'MIN',
    awayTeam: 'SAC',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 19 - vs Portland (Home)
  {
    id: 'min-10',
    date: '2026-03-19',
    time: '7:00 PM',
    homeTeam: 'MIN',
    awayTeam: 'POR',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 21 - vs Phoenix (Home)
  {
    id: 'min-11',
    date: '2026-03-21',
    time: '7:00 PM',
    homeTeam: 'MIN',
    awayTeam: 'PHX',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 23 - vs Denver (Home)
  {
    id: 'min-12',
    date: '2026-03-23',
    time: '7:00 PM',
    homeTeam: 'MIN',
    awayTeam: 'DEN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 25 - at New Orleans
  {
    id: 'min-13',
    date: '2026-03-25',
    time: '7:00 PM',
    homeTeam: 'NOP',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 27 - at Houston
  {
    id: 'min-14',
    date: '2026-03-27',
    time: '7:00 PM',
    homeTeam: 'HOU',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 29 - vs Utah (Home)
  {
    id: 'min-15',
    date: '2026-03-29',
    time: '7:00 PM',
    homeTeam: 'MIN',
    awayTeam: 'UTA',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
  // March 31 - at Denver
  {
    id: 'min-16',
    date: '2026-03-31',
    time: '7:00 PM',
    homeTeam: 'DEN',
    awayTeam: 'MIN',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
  },
];

// Helper: get all games for a team in a month
export function getTeamMonthGames(team: string, month: number, year: number): SimpleGame[] {
  const prefix = `${year}-${String(month).padStart(2, '0')}`;
  return MOCK_GAMES.filter(
    (g) => g.date.startsWith(prefix) && (g.homeTeam === team || g.awayTeam === team)
  ).sort((a, b) => a.date.localeCompare(b.date));
}

// Helper: is this team home or away?
export function isHomeGame(game: SimpleGame, team: string): boolean {
  return game.homeTeam === team;
}

// Helper: get opponent abbreviation
export function getOpponent(game: SimpleGame, team: string): string {
  return game.homeTeam === team ? game.awayTeam : game.homeTeam;
}

// Helper: get W/L result for a team
export function getResult(game: SimpleGame, team: string): 'W' | 'L' | null {
  if (game.status !== 'final' || game.homeScore === null || game.awayScore === null) return null;
  const myScore = game.homeTeam === team ? game.homeScore : game.awayScore;
  const theirScore = game.homeTeam === team ? game.awayScore : game.homeScore;
  return myScore > theirScore ? 'W' : 'L';
}
