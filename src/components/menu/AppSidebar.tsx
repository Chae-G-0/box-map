import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Input } from "../ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { REGION_CITY } from "@/lib/constants";

export default function AppSidebar() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <SidebarHeader className="mx-2 mt-4 font-bold">
        지역별 박스 보기
      </SidebarHeader>
      <SidebarContent>
        {REGION_CITY.map((region) => (
          <Collapsible
            key={region.id}
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarGroup className="p-0.5">
              <CollapsibleTrigger className="hover:bg-muted mx-1 rounded-md">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      {region.label}
                      <ChevronDown className="ml-auto" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenuSub>
                    {region.cities.map((city) => {
                      return (
                        <SidebarMenuSubItem
                          key={city.id}
                          className="cursor-pointer"
                        >
                          <SidebarMenuSubButton
                            onClick={() =>
                              navigate(`/map/${region.id}/${city.id}`)
                            }
                          >
                            {city.label}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
