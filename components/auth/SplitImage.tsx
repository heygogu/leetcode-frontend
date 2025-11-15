import React from "react";
import AppLogo from "../AppLogo";
import Image from "next/image";

interface Props {
  pageType: "login" | "signup";
}
const SplitImage = (props: Props) => {
  return (
    <div className="hidden md:flex flex-col justify-between">
      <div
        className={`relative w-full h-screen  overflow-hidden ${
          props.pageType == "login" ? "rounded-r-4xl" : "rounded-l-4xl"
        }`}
      >
        <div className="absolute top-6 left-6 z-20 flex items-center gap-1 font-bold text-3xl text-white drop-shadow-lg">
          <AppLogo icon={true} size="30px" weight="bold" />
        </div>

        <Image
          src="https://res.cloudinary.com/mhmd/image/upload/v1555917661/art-colorful-contemporary-2047905_dxtao7.jpg"
          alt="login-image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SplitImage;
