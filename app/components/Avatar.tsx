"use client";
import Image from "next/image";
const Avatar = () => {
  return (
    <Image
      className="roudned-full"
      height={30}
      width={30}
      alt="avatar"
      src="/images/placeholder.jpg"
    />
  );
};
export default Avatar;
