import supabase from "@/lib/supabase";

export async function signInWithOauth(provider: "kakao" | "google") {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    await supabase.auth.signOut({
      scope: "local",
    });
  }
}
