import { signInWithOauth } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithOauth() {
  return useMutation({
    mutationFn: signInWithOauth,
  });
}
