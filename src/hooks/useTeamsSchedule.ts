import type { ESPNScheduleResponse } from "@/types/EspnSchedule";
import { useQuery } from "@tanstack/react-query";

export function useScheduleByTeam(team: string) {
    return useQuery({
    queryKey: ['nba-teams-schedule', team],
    queryFn: async () => {
      const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${team}/schedule`);
      const data = await res.json();
      return data as ESPNScheduleResponse

    },
    staleTime: Infinity, // teams don't change mid-season
  });
}