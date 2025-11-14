import React from "react";
import DarkMode from "../DarkMode";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-1 font-bold text-3xl">
          <h1 className="text-primary">algo</h1>
          <h1>arena</h1>
        </div>

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
