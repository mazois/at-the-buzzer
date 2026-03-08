import { GameState, type ESPNScheduleEvent, type ScoreboardEvent } from "@/types/EspnSchedule";

export function getUpcomingLabel(
  event: ESPNScheduleEvent | undefined,
) {

  if (!event) return null;

  const competition = event.competitions[0];
  if (!competition) return null;

  const  {state, shortDetail } = competition.status.type

  const isUpcoming = state === GameState.PRE;
  if (!isUpcoming) return null;

  console.log(competition)

  return `${shortDetail.split("-").slice(1)}`

}

export function getFinalResultLabel(
  event: ESPNScheduleEvent,
  selectedTeam: string
) {
  if (!event) return null;

  const competition = event.competitions[0];
  if (!competition) return null;

  const isFinal = competition.status.type.state === GameState.POST;
  if (!isFinal) return null;

  const selected = competition.competitors.find(
    (team) => team.team.abbreviation === selectedTeam
  );

  const opponent = competition.competitors.find(
    (team) => team.team.abbreviation !== selectedTeam
  );

  if (!selected || !opponent) return null;

  const selectedScore = Number(selected.score.value);
  const opponentScore = Number(opponent.score.value);

  const result = selectedScore > opponentScore ? 'W' : 'L';

  return {
    result,
    score: `${selectedScore}–${opponentScore}`
  }
}

export function getLiveLabel(event: ScoreboardEvent | undefined, selectedTeam: string) {
  if (!event) return null;

  const competition = event.competitions[0];
  if (!competition) return null;

  if (competition.status.type.state !== GameState.IN_PROGRESS) return null;

  const selected = competition.competitors.find(
    (c) => c.team.abbreviation === selectedTeam
  );
  const opponent = competition.competitors.find(
    (c) => c.team.abbreviation !== selectedTeam
  );


  if (!selected?.score || !opponent?.score) return null;

  const period = competition.status.period;
  const clock = competition.status.displayClock;

  const selectedScore = selected.score;
  const opponentScore = opponent.score;


  return `Q${period} ${clock} · ${selectedScore}–${opponentScore}`;
}