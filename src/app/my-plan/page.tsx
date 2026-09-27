

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePlan } from "@/context/PlanContext";

const MyPlanPage = () => {
  const { planList, savedList, removeFromPlan, removeFromSaved } = usePlan();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  
  const currentList = activeTab === "plan" ? planList : savedList;

  
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, curr) => acc + Number(curr.duration || 0),
    0
  );
  const totalCalories = currentList.reduce(
    (acc, curr) => acc + Number(curr.caloriesBurned || 0),
    0
  );

  return (
    <main className="min-h-screen bg-[#0f1115] px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-black uppercase">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Exercises and Minutes &  Calories */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-gray-800 bg-[#181a20] p-5">
            <p className="text-xs uppercase text-gray-500">
              Exercises
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#88e700]">
              {totalExercises}
            </h2>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#181a20] p-5">
            <p className="text-xs uppercase text-gray-500">
              Minutes
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              {totalMinutes}
            </h2>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#181a20] p-5">
            <p className="text-xs uppercase text-gray-500">
              Calories
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              {totalCalories}
            </h2>
          </div>

        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-4 py-2 text-xs font-bold transition cursor-pointer ${
              activeTab === "plan"
                ? "bg-[#88e700] text-black"
                : "bg-[#181a20] text-gray-400 border border-gray-800"
            }`}
          >
            TODAY &apos; S PLAN ({planList.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-4 py-2 text-xs font-bold transition cursor-pointer ${
              activeTab === "saved"
                ? "bg-[#88e700] text-black"
                : "bg-[#181a20] text-gray-400 border border-gray-800"
            }`}
          >
            SAVED ({savedList.length})
          </button>
        </div>

        {/* Empty State & Content List */}
        {currentList.length === 0 ? (
          /* Empty State */
          <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-xl border border-gray-800 bg-[#111318]">

            <div className="text-center">

              <h2 className="text-xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-5 inline-block rounded-lg bg-[#88e700] px-5 py-3 text-xs font-black uppercase text-black">
                GO TO WORKOUTS
              </Link>

            </div>

          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {currentList.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#181a20] p-4"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <div className="relative h-12 w-16 overflow-hidden rounded-lg bg-[#22252e]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-extrabold uppercase text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-400">
                      ⏱ {item.duration} min | 🔥 {item.caloriesBurned} kcal
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    activeTab === "plan"
                      ? removeFromPlan(item.id)
                      : removeFromSaved(item.id)
                  }
                  className="text-xs font-bold text-red-500 hover:underline cursor-pointer">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default MyPlanPage;