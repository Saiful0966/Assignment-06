"use client";
import React from "react";
import { usePlan, Workout } from "@/context/PlanContext";

export default function ActionButtons({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved } = usePlan();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
      <button 
        onClick={() => addToPlan(workout)}
        className="bg-[#88e700] hover:bg-[#79cb00] text-black font-extrabold text-xs py-3.5 px-4 rounded-xl uppercase tracking-wide transition duration-200 shadow-md cursor-pointer"
      >
        + Add to today &apos; s plan
      </button>

      <button 
        onClick={() => addToSaved(workout)}
        className="bg-transparent hover:bg-gray-800 border border-gray-700 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl uppercase tracking-wide transition duration-200 cursor-pointer"
      >
        ♡ Save for later
      </button>
    </div>
  );
}