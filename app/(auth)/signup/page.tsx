"use client";

import Link from "next/link";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Header */}
      <div className="border-b border-blue-100 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-slate-950">Studio</span>
          </Link>
          <Link
            href="/login"
            className="text-slate-600 hover:text-slate-950 font-medium transition-colors"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Content Section */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <span className="flex w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Join thousands of creators
            </div>
            <h1 className="text-4xl font-bold text-slate-950 mb-3 leading-tight">
              Start Creating Today
            </h1>
            <p className="text-lg text-slate-600">
              Get access to powerful studio tools and bring your ideas to life
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/50 border border-blue-50 p-8">
            <SignupForm />
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm text-slate-500 mt-6">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
