import { useSession } from "@/store/useSession";
import { Navigate, Outlet } from "react-router-dom";

export default function MemberOnlyLayout() {
  const session = useSession();

  if (!session) return <Navigate to={"/"} replace={true} />;

  return <Outlet />;
}
