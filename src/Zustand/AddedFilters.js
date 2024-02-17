import { create } from "zustand";

export const useAddedFilters = create((set) => ({
  selectedFilters: [],
  setSelectedFilters: (input) => set(() => ({ selectedFilters: input })),
  appliedFilters: false,
  setAppliedFilters: (input) => set(() => ({ appliedFilters: input })),
}));
