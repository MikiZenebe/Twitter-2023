"use client";

import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetBtn from "./SidebarTweetBtn";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notification",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6 ">
      <div className="flex flex-col items-end ">
        <div className="space-y-2 lg:w-[230px] ">
          <SidebarLogo />
          <div className="bg-[#24313b] pb-8 pt-4 px-6 rounded-xl">
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                auth={item.auth}
              />
            ))}
            {currentUser && (
              <SidebarItem
                onClick={() => signOut()}
                icon={BiLogOut}
                label="Logout"
              />
            )}

            <SidebarTweetBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
