"use client";

import Link from "next/link";

const MyPlanPage = () => {
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

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-gray-800 bg-[#181a20] p-5">
            <p className="text-xs uppercase text-gray-500">
              Exercises
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#88e700]">
              0
            </h2>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#181a20] p-5">
            <p className="text-xs uppercase text-gray-500">
              Minutes
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              0
            </h2>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#181a20] p-5">
            <p className="text-xs uppercase text-gray-500">
              Calories
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              0
            </h2>
          </div>

        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-2">
          <button className="rounded-lg bg-[#88e700] px-4 py-2 text-xs font-bold text-black">
            TODAY &apos; S PLAN
          </button>

          <button className="rounded-lg bg-[#181a20] px-4 py-2 text-xs font-bold text-gray-400">
            SAVED
          </button>
        </div>

        {/* Empty State */}
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
              className="mt-5 inline-block rounded-lg bg-[#88e700] px-5 py-3 text-xs font-black uppercase text-black"
            >
              GO TO WORKOUTS
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
};

export default MyPlanPage;