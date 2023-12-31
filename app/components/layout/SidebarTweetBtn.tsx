"use client";

import React, { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useLoginModel from "@/app/hooks/useLoginModal";

export default function SidebarTweetBtn() {
  const loginModal = useLoginModel();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>

      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer">
        <p className="text-white hidden lg:block text-center font-semibold text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
}
