import { useQuery } from '@tanstack/react-query';

export interface ESPNTeam {
  team: {
    id: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    color: string;
    alternateColor: string;
    logos: { href: string; rel: string[] }[];
  };
}

export function useTeams() {
  return useQuery({
    queryKey: ['nba-teams'],
    queryFn: async () => {
      const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams');
      const data = await res.json();
      return data.sports[0].leagues[0].teams as ESPNTeam[];
    },
    staleTime: Infinity, // teams don't change mid-season
  });
}
