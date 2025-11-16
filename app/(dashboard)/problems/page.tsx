"use client";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AppleCardsCarouselDemo } from "@/components/dashboard/Carousel";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";

const LeetcodeProblems = [
  { id: 1, title: "Two Sum", difficulty: "Easy", acceptance: 85 },
  { id: 2, title: "Add Two Numbers", difficulty: "Medium", acceptance: 65 },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Hard",
    acceptance: 50,
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: 35,
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    acceptance: 32,
  },
  { id: 6, title: "Zigzag Conversion", difficulty: "Medium", acceptance: 45 },
  { id: 7, title: "Reverse Integer", difficulty: "Medium", acceptance: 28 },
  {
    id: 8,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    acceptance: 16,
  },
  { id: 9, title: "Palindrome Number", difficulty: "Easy", acceptance: 52 },
  {
    id: 10,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    acceptance: 27,
  },
];

const Problems = () => {
  const [date, setDate] = useState(new Date());

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-500";
      case "Medium":
        return "text-yellow-500";
      case "Hard":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="grid grid-cols-5 gap-4 min-h-screen ">
      <div className="col-span-4 row-span-1 -mt-2">
        <AppleCardsCarouselDemo />
      </div>
      <div className="col-span-1 row-span-4 sticky top-30 self-start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => newDate && setDate(newDate)}
          className="rounded-3xl bg-accent"
          classNames={{
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav_button:
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",

            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-gray-400 rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-gray-700 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: "h-9 w-9 p-0 font-normal hover:bg-gray-700 hover:text-white rounded-md transition-colors",
            day_selected:
              "bg-green-500 text-white hover:bg-green-600 hover:text-white focus:bg-green-500 focus:text-white",
            day_today: "bg-gray-700 text-white",
            day_outside: "text-gray-600 opacity-50",
            day_disabled: "text-gray-600 opacity-50",
            day_hidden: "invisible",
          }}
        />

        <div className="rounded-lg p-4">
          <div className="text-yellow-500 font-bold mb-2">Weekly Premium</div>
          <div className="text-sm text-gray-400">5 days left</div>
        </div>

        <div className="border rounded-lg p-4 bg-accent ">
          <h3 className="font-semibold mb-3">Trending Companies</h3>
          <div className="space-y-2">
            {[
              { name: "Meta", count: 1339 },
              { name: "Google", count: 2153 },
              { name: "Amazon", count: 1893 },
              { name: "Apple", count: 455 },
            ].map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-between text-sm"
              >
                <span>{company.name}</span>
                <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs">
                  {company.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-4 row-span-4 rounded-lg overflow-hidden">
        <div className="flex items-center">
          <Input
            className="max-w-xs m-1 bg-accent rounded-xl"
            placeholder="Search question"
          />
          <Button size={"icon"} variant={"outline"}>
            <FilterIcon />
          </Button>
        </div>
        <table className="w-full mt-2 bg-accent/30 ">
          <thead className=" outline-1 outline-dashed text-primary tracking-wide font-bold ">
            <tr>
              <th className="text-left p-4  text-sm  w-20">ID</th>
              <th className="text-left p-4  text-sm ">Title</th>
              <th className="text-left p-4  text-sm  w-32">Acceptance</th>
              <th className="text-left p-4  text-sm  w-32">Difficulty</th>
            </tr>
          </thead>
          <tbody className="">
            {LeetcodeProblems.map((problem) => (
              <tr
                key={problem.id}
                className="border-b border-dashed border-primary/10 cursor-pointer w-full hover:bg-accent transition-colors "
              >
                <td className="p-4 text-gray-400">{problem.id}</td>
                <td className="p-4 font-medium">{problem.title}</td>
                <td className="p-4 text-gray-400">{problem.acceptance}%</td>
                <td
                  className={`p-4 font-medium ${getDifficultyColor(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problems;
