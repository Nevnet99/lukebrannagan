import { create } from 'zustand';

type TCursorType = 'DEFAULT' | 'CLICKABLE' | 'TYPEABLE';

export const useCursorStore = create<{
  cursorType: TCursorType;
  setCursorType: (cursor: TCursorType) => void;
}>((set) => ({
  cursorType: 'DEFAULT',
  setCursorType: (cursor) => set({ cursorType: cursor }),
}));
