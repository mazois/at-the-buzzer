import { useEffect, useMemo } from 'react';
import useAppStore from '@/store/useAppStore';
import { useTeams } from '@/hooks/useTeams';

export const Header = () => {
  const selectedTeam = useAppStore((state) => state.selectedTeam);
  const setSelectedTeam = useAppStore((state) => state.setSelectedTeam);
  const { data } = useTeams();

  const selectedTeamData = useMemo(
    () => data?.find((t) => t.team.abbreviation === selectedTeam)?.team,
    [data, selectedTeam]
  );

  const handleTeamSelect = (team: string ) => {
    localStorage.setItem('selectedTeam', team);
    setSelectedTeam(team);
  }

  useEffect(() => {
    const storedTeam = localStorage.getItem('selectedTeam');
    console.log('Stored team from localStorage:', storedTeam);
    if (storedTeam) {
      setSelectedTeam(storedTeam);
    }

  }, [setSelectedTeam]);

  return (
    <>
      <nav
        className="container mx-auto px-3 sm:px-6 py-3"
        style={{ background: 'linear-gradient(180deg, #0D0D15, #08080E)' }}
      >
        <img
          src={selectedTeamData?.logos[0].href}
          alt="Team Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
        />
        <h1
          className="text-xl sm:text-2xl font-bold text-zinc-300 mb-3 sm:mb-4"
          style={{ color: `#${selectedTeamData?.color}` }}
        >
          {selectedTeamData?.displayName}
        </h1>
        <div className="relative mb-4 sm:mb-6">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(data ?? []).map((team) => (
              <span
                onClick={() => handleTeamSelect(team.team.abbreviation)}
                key={team.team.abbreviation}
                className={`inline-flex shrink-0 items-center rounded-md cursor-pointer px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium ${team.team.abbreviation === selectedTeam ? `text-white` : `text-white opacity-50`} inset-ring inset-ring-gray-400/20 touch-manipulation`}
                style={{
                  backgroundColor:
                    team.team.abbreviation === selectedTeam ? `#${team.team.color}` : '#0D0D15',
                }}
              >
                {team.team.abbreviation}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#08080E]" />
        </div>
      </nav>
    </>
  );
};
