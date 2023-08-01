"use client";

import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import useLoginModel from "@/app/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const loginModel = useLoginModel();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModel.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser, auth, loginModel]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center ">
      <div className="relative rounded-2xl h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-25 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>

      <div className="relative hidden rounded-2xl gap-4 flex-row lg:flex items-center p-4 hover:bg-slate-300 hover:bg-opacity-25 cursor-pointer">
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};
export default SidebarItem;
