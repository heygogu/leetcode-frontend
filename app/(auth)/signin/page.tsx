"use client";

import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";
import AppLogo from "@/components/AppLogo";
import SplitImage from "@/components/auth/SplitImage";
import DarkMode from "@/components/DarkMode";

export default function LoginPage() {
  return (
    <div className="grid md:grid-cols-2 bg-background min-h-svh">
      {/* Left Panel - Dark */}
      <SplitImage pageType="login" />

      {/* Right Panel - Light Content */}
      <div className="flex relative flex-col justify-between items-center h-screen overflow-hidden p-8 md:p-12">
        {/* <div className="flex md:hidden items-center gap-2 mb-8">
          <div className="flex items-center gap-1 font-bold text-3xl">
            <h1 className="text-primary">algo</h1>
            <h1>arena</h1>
          </div>
        </div> */}
        <div className="absolute top-4 right-4">
          <DarkMode />
        </div>

        <div className="flex-1 flex flex-col  justify-center w-full max-w-[300px]">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold  mb-2">Sign In</h2>
            <p className="text-neutral-400">
              Access your{" "}
              <span className="text-lg font-semibold">
                <span className="text-primary">algo </span>
                <span>arena</span>
              </span>{" "}
              account
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center text-sm text-neutral-400">
            New on our platform?{" "}
            <Link
              href="/signup"
              className="font-semibold text-primary/60  hover:underline"
            >
              Create an account
            </Link>
          </div>
        </div>

        <div className="text-sm text-neutral-400 text-center ">
          Protected by <AppLogo icon={false} size="14px" weight="bold" />
        </div>
      </div>
    </div>
  );
}
