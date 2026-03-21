import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "./AppSidebar";

export default function Sidebar() {
  return (
    <SidebarProvider className="w-fit">
      <AppSidebar />
      <div>
        <SidebarTrigger />
      </div>
    </SidebarProvider>
  );
}
