import React from "react";
import DarkMode from "../DarkMode";
import { Button } from "../ui/button";
import Link from "next/link";
import AppLogo from "../AppLogo";

const Header = () => {
  return (
    <header className="fixed inset-0 container mx-auto h-[70px] backdrop-blur-sm z-50 pt-5">
      <div className="flex items-center justify-between ">
        <AppLogo icon={true} size="30px" weight="bold" />

        <nav>
          <ul className="flex gap-2 text-md font-semibold">
            <li>
              <DarkMode />
            </li>
            <li>
              <Link href={"/signup"}>
                <Button className="cursor-pointer " variant={"secondary"}>
                  Sign up
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/signin"}>
                <Button className="cursor-pointer">Log in</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
