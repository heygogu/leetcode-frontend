"use client";
import AppLogo from "@/components/AppLogo";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import DarkMode from "@/components/DarkMode";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTab, setCurrentTab] = useState("problems");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const segment = pathname.split("/")[1] || "problems";
    setCurrentTab(segment);

    if (pathname === "/" || segment === "") {
      router.replace("/problems");
    }
  }, [pathname, router]);

  return (
    <div className="flex flex-col min-h-screen container mx-auto my-3">
      <header className="flex h-20 justify-between backdrop-blur-xs items-center fixed top-0 z-50 mx-auto container  rounded-b-lg">
        <div className="flex gap-8 ">
          <AppLogo icon={true} size="30px" weight="bold" />
          <Tabs value={currentTab} className="w-full mt-2">
            <TabsList className="bg-transparent rounded-none p-0 gap-3">
              <TabsTrigger
                onClick={() => router.push("/problems")}
                className="bg-transparent text-lg data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent data-[state=active]:shadow-none"
                value="problems"
              >
                Problems
              </TabsTrigger>
              <TabsTrigger
                onClick={() => router.push("/contests")}
                className="bg-transparent text-lg data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent data-[state=active]:shadow-none"
                value="contests"
              >
                Contests
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <DarkMode />
      </header>
      <main className="pt-10 container mx-auto">{children}</main>
    </div>
  );
}
