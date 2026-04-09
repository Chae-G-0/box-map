import supabase from "@/lib/supabase";
import type { Provider } from "@supabase/supabase-js";

export async function signInWithOauth(provider: "kakao" | "google") {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  if (error) throw error;
  return data;
}
