import type { ScoreboardResponse } from "@/types/EspnSchedule";
import { useQuery } from "@tanstack/react-query";

export function useScoreboard(retry: boolean) {
    return useQuery<ScoreboardResponse>({
        queryKey: ["scoreboard"],
        queryFn: async () => {
            const result = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
            return result.json()
        },
        refetchInterval: retry ? 1500 : false,
        enabled: retry,
        staleTime: 1000,
    })
}