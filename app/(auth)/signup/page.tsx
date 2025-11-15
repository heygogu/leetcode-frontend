"use client";

import Link from "next/link";
import { SignupForm } from "@/components/auth/SignupForm";
import SplitImage from "@/components/auth/SplitImage";
import { Badge } from "@/components/ui/badge";

export default function SignupPage() {
  return (
    <div className="grid md:grid-cols-2 bg-background min-h-svh">
      {/* Header */}

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-[340px]">
          {/* Content Section */}
          <div className="mb-8 text-center">
            <Badge className="px-3 py-1 mb-2" variant={"secondary"}>
              <span className="flex w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Join thousands of learners
            </Badge>
            <h1 className="text-4xl font-bold text-primary mb-3 leading-tight">
              Start Coding Today
            </h1>
            <p className="text-md text-neutral-400">
              Get access to powerful coding tools and help your career grow.
            </p>
          </div>

          <SignupForm />
        </div>
      </div>

      <SplitImage pageType="signup" />
    </div>
  );
}
