import { useSession } from "@/store/useSession";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestOnlyLayout() {
  const session = useSession();

  if (session) return <Navigate to={"/"} replace={true} />;

  return <Outlet />;
}
