"use client";

import * as React from "react";
import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { iconMap, DefaultIcon } from "@/components/icon-map";

export function NavSecondary({
  items,
  activePathname,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: string;
    disabled?: boolean;
  }[];
  activePathname: string;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const Icon =
              item.icon && iconMap[item.icon]
                ? iconMap[item.icon]
                : DefaultIcon;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  disabled={item.disabled}
                  className={
                    item.disabled
                      ? "pointer-events-none cursor-not-allowed opacity-50"
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
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
