import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useUser from "../hooks/useUser";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback((e: any) => {
    e.stopPropagation();

    router.push(`/user/${userId}`);
  }, []);

  return (
    <div
      className={`${hasBorder ? "border-4 border-black" : ""} ${
        isLarge ? "h-32" : "h-12"
      } ${
        isLarge ? "w-32" : "w-12"
      } rounded-full hover:opacity-90 transition cursor-pointer relative`}
    >
      <Image
        alt="Avatar"
        onClick={onClick}
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        src={fetchedUser?.profileImage || "/../favicon.ico"}
      />
    </div>
  );
};

export default Avatar;
