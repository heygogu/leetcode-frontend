"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className=" grid md:grid-cols-2 bg-background min-h-svh">
      {/* Left Panel - Dark */}
      <div className="hidden md:flex flex-col justify-between">
        <div className="relative w-full h-screen  overflow-hidden rounded-r-4xl">
          {/* Logo on top */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-1 font-bold text-3xl text-white drop-shadow-lg">
            <span className="text-primary">algo</span> arena
          </div>

          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/mhmd/image/upload/v1555917661/art-colorful-contemporary-2047905_dxtao7.jpg"
            alt="login-image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Panel - Light Content */}
      <div className="flex flex-col  justify-between items-center h-screen overflow-hidden p-8 md:p-12">
        {/* <div className="flex md:hidden items-center gap-2 mb-8">
          <div className="flex items-center gap-1 font-bold text-3xl">
            <h1 className="text-primary">algo</h1>
            <h1>arena</h1>
          </div>
        </div> */}

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

        <div className="text-sm text-neutral-400 text-center">
          Protected by <span className="text-primary">algo</span> arena
        </div>
      </div>
    </div>
  );
}
