import supabase from "@/lib/supabase";
import { useIsSessionLoaded, useSetSession } from "@/store/useSession";
import { useEffect, type ReactNode } from "react";
import GlobalLoader from "../GlobalLoader";

export default function SessionProvider({ children }: { children: ReactNode }) {
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <GlobalLoader />;

  return children;
}
