"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { iconMap, DefaultIcon } from "@/components/icon-map";

export function NavMain({
  items,
  activePathname,
}: {
  items: {
    title: string;
    url: string;
    icon?: string;
    disabled?: boolean;
    tooltip?: React.ReactNode;
  }[];
  activePathname: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const Icon =
              item.icon && iconMap[item.icon]
                ? iconMap[item.icon]
                : DefaultIcon;

            return (
              <SidebarMenuItem key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton
                      asChild
                      disabled={item.disabled}
                      className={
                        item.disabled
                          ? "cursor-not-allowed opacity-50"
                          : activePathname === item.url
                            ? "bg-primary/10!"
                            : ""
                      }
                    >
                      {item.disabled ? (
                        <span>
                          <Icon />
                          <span>{item.title}</span>
                        </span>
                      ) : (
                        <Link href={item.url}>
                          <Icon />
                          <span>{item.title}</span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  {item.tooltip && (
                    <TooltipContent p side="right">
                      {item.tooltip}
                    </TooltipContent>
                  )}
                </Tooltip>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
