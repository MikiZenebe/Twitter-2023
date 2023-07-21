"use client";
import { useRouter } from "next/navigation";
import { BsTwitter } from "react-icons/bs";

export default function SidebarLogo() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-[#39709b] hover:bg-opacity-30 cursor-pointer transition ml-6"
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
}
