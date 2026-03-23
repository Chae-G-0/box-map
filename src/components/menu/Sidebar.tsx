import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";

export default function Sidebar() {
  return (
    <SidebarProvider className="relative w-fit">
      <AppSidebar />
      <div>
        <SidebarTrigger className="fixed" />
      </div>
    </SidebarProvider>
  );
}
