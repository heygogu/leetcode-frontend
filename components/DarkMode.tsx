"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      onClick={toggleTheme}
      className=" inline-flex size-9 cursor-pointer rounded-full justify-center items-center bg-accent"
    >
      <Sun className="size-4 hidden dark:block " />
      <Moon className="size-4 block dark:hidden" />
    </div>
  );
}
