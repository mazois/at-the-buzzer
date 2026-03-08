import { create } from 'zustand';

interface AppState {
  selectedTeam: string;
  selectedDay: number | null;
  currentMonth: Date;
  setSelectedTeam: (team: string | null) => void;
  setDay: (day: number | null) => void;
  nextMonth: (month: Date) => void;
  prevMonth: (month: Date) => void;
}

const useAppStore = create<AppState>((set) => ({
  selectedTeam: 'ATL',
  selectedDay: null,
  currentMonth: new Date(),
  setSelectedTeam: (team) => set({ selectedTeam: team ?? 'ATL' }),
  setDay: (day) => set({ selectedDay: day }),
  nextMonth: () =>
    set((s) => ({
      currentMonth: new Date(s.currentMonth.getFullYear(), s.currentMonth.getMonth() + 1),
      selectedDay: null,
    })),
  prevMonth: () =>
    set((s) => ({
      currentMonth: new Date(s.currentMonth.getFullYear(), s.currentMonth.getMonth() - 1),
      selectedDay: null,
    })),
}));

export default useAppStore;
