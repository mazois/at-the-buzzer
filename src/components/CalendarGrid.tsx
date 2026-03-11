import { useScheduleByTeam } from '@/hooks/useTeamsSchedule';
import useAppStore from '@/store/useAppStore';
import { useMemo, useState, useEffect } from 'react';
import { getDay, getDaysInMonth, startOfMonth, format } from 'date-fns';
import { type ESPNScheduleEvent } from '@/types/EspnSchedule';
import { getFinalResultLabel, getLiveLabel, getUpcomingLabel } from '@/utils/scheduleHelper';
import { useScoreboard } from '@/hooks/useScoreboard';
import { useTeams } from '@/hooks/useTeams';

export const CalendarGrid = () => {
  const currentDate = useMemo(() => new Date(), []);
  const currentDay = currentDate.getDate();
  const firstDayIndex = getDay(startOfMonth(currentDate));
  const totalDays = getDaysInMonth(currentDate);
  const selectedTeam = useAppStore((state) => state.selectedTeam);
  const teamData = useTeams().data?.find((t) => t.team.abbreviation === selectedTeam)?.team;

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 639px)').matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const cells: (number | null)[] = [
    ...Array(firstDayIndex).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  const { data: schedule } = useScheduleByTeam(selectedTeam);
  const { data: scoreboard } = useScoreboard(true);

  const eventsByDay = useMemo(() => {
    const map = new Map<number, ESPNScheduleEvent>();
    schedule?.events.forEach((event) => {
      const date = new Date(event.date);
      if (
        date.getMonth() !== currentDate.getMonth() ||
        date.getFullYear() !== currentDate.getFullYear()
      )
        return;
      const dayNum = date.getDate();
      if (!map.has(dayNum)) {
        map.set(dayNum, event);
      }
    });
    return map;
  }, [schedule, currentDate]);

  const sortedEvents = useMemo(
    () => Array.from(eventsByDay.entries()).sort(([a], [b]) => a - b),
    [eventsByDay]
  );

  const teamColor = `#${teamData?.color}`;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2">
        {sortedEvents.length === 0 && (
          <p className="text-zinc-500 text-sm text-center py-8">No games this month</p>
        )}
        {sortedEvents.map(([day, event]) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const finalResultLabel = getFinalResultLabel(event, selectedTeam);
          const upcomingLabel = getUpcomingLabel(event);
          const liveScoreboardEvent = scoreboard?.events.find((e) => e.id === event.id);
          const liveLabel = liveScoreboardEvent
            ? getLiveLabel(liveScoreboardEvent, selectedTeam)
            : null;
          const isToday = day === currentDay;

          return (
            <div
              key={day}
              className="flex items-center gap-3 rounded-lg p-3 border"
              style={{
                borderColor: isToday ? `#${teamData?.alternateColor}` : teamColor,
                backgroundColor: isToday ? '#1A1A2E' : '#0D0D15',
              }}
            >
              <div className="w-12 text-center shrink-0">
                <div className="text-xs font-bold text-zinc-500 font-['Oswald'] tracking-widest uppercase">
                  {format(date, 'EEE')}
                </div>
                <div className="text-xl font-bold text-zinc-200 font-['Oswald'] leading-tight">
                  {day}
                </div>
              </div>
              <div className="w-px self-stretch" style={{ backgroundColor: teamColor }} />
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-medium text-zinc-300 truncate">
                  {event.shortName}
                </span>
                {finalResultLabel && (
                  <span
                    className={`text-sm font-bold ${finalResultLabel.result === 'W' ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {finalResultLabel.result} {finalResultLabel.score}
                  </span>
                )}
                {upcomingLabel && <span className="text-xs text-zinc-500">{upcomingLabel}</span>}
                {liveLabel && (
                  <span className="text-xs text-yellow-400 font-medium">● LIVE · {liveLabel}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-7 gap-1 sm:gap-2">
      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
        <div
          key={d}
          className="text-center text-xs font-bold text-zinc-600 py-1 sm:py-2 tracking-widest font-['Oswald']"
        >
          <span className="hidden sm:inline">{d}</span>
          <span className="sm:hidden">{d[0]}</span>
        </div>
      ))}
      {cells.map((day, i) => {
        const event = day ? eventsByDay.get(day) : null;
        const upcomingLabel = getUpcomingLabel(event as ESPNScheduleEvent);
        const finalResultLabel = getFinalResultLabel(event as ESPNScheduleEvent, selectedTeam);
        const liveScoreboardEvent = event
          ? scoreboard?.events.find((e) => e.id === event.id)
          : null;
        const liveLabel = liveScoreboardEvent
          ? getLiveLabel(liveScoreboardEvent, selectedTeam)
          : null;
        return (
          <div
            key={i}
            className={`
              min-h-13 sm:min-h-22.5 rounded-lg p-1 sm:p-2 border border-white/5
              ${day === currentDay ? 'bg-[#1A1A2E]' : 'bg-[#0D0D15] cursor-pointer hover:bg-[#1A1A2E]'}
              transition-colors touch-manipulation
            `}
            style={{
              borderColor: `${day === currentDay ? `#${teamData?.alternateColor}` : `#${teamData?.color}`}`,
            }}
          >
            {day && (
              <span className="text-xs sm:text-sm font-bold font-['Oswald'] text-zinc-300">
                {day}
              </span>
            )}
            <div className="mt-0.5 sm:mt-1 text-xs text-zinc-500">
              {event && (
                <div className="flex flex-col gap-0.5">
                  <span className="hidden sm:block font-medium text-zinc-400">
                    {event.shortName}
                  </span>
                  {finalResultLabel && (
                    <div className="flex gap-1">
                      <span
                        className={`font-bold ${finalResultLabel.result === 'W' ? 'text-green-500' : 'text-red-500'}`}
                      >
                        {finalResultLabel.result}
                      </span>
                      <span className="hidden sm:inline text-zinc-500">
                        {finalResultLabel.score}
                      </span>
                    </div>
                  )}
                  {upcomingLabel && (
                    <span className="font-medium hidden sm:inline">{upcomingLabel}</span>
                  )}
                  {liveLabel && (
                    <span className="text-yellow-500 font-medium hidden sm:inline">
                      {liveLabel}
                    </span>
                  )}
                  {liveLabel && <span className="text-yellow-500 font-bold sm:hidden">●</span>}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
