import type { Session } from "@supabase/supabase-js";
import { create } from "zustand";

interface State {
  isLoaded: boolean;
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const useSessionStore = create<State>((set) => ({
  isLoaded: false,
  session: null,
  setSession: (session: Session | null) => set({ session, isLoaded: true }),
}));

export const useSession = () => {
  const session = useSessionStore((store) => store.session);
  return session;
};

export const useIsSessionLoaded = () => {
  const isSessionLoaded = useSessionStore((store) => store.isLoaded);
  return isSessionLoaded;
};

export const useSetSession = () => {
  const setSession = useSessionStore((store) => store.setSession);
  return setSession;
};
