
import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Workout {
  id: string | number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number | string;
  caloriesBurned: number | string;
  rating: number | string;
}
    //  https://api.abcz.workers.dev/api/fitlog  

const WorkoutLibrary = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog ", {
    cache: "no-store",
  });

  const workouts: Workout[] = await res.json();

  return (
    <div className="w-full bg-[#0f1115] px-6 py-10">

      {/* Section header */}
      <div className="mb-8 text-left">
        <h2 className="text-3xl font-black text-white uppercase tracking-wider">
          THE LIBRARY
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts?.map((item) => (
           <Link 
            href={`/workout/${item.id}`} 
            key={item.id} 
            className="block h-full"
          >
            <div className="bg-[#181a20] rounded-2xl border border-gray-800/80 overflow-hidden hover:border-gray-700 transition duration-200 flex flex-col h-full">

              {/* Image */}
              <div className="relative w-full aspect-video bg-[#22252e] overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card */}
              <div className="p-5 text-left flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {item.muscleGroups?.map((group, index) => (
                      <span
                        key={index}
                        className="bg-[#88e700] text-black font-extrabold text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wide"
                      >
                        {group}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-white uppercase tracking-tight pt-1">
                    {item.name}
                  </h3>

                  {/* Equipment */}
                  <p className="text-xs text-gray-400 font-medium">
                    {item.equipment}
                  </p>
                </div>

                 {/* duration */}
                <div className="pt-3 border-t border-gray-800/80 flex items-center gap-4 text-xs font-semibold text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span>⏱</span>
                    <span>{item.duration} min</span>
                  </div>

                  {/* caloriesBurned */}
                  <div className="flex items-center gap-1.5">
                    <span>🔥</span>
                    <span>{item.caloriesBurned} kcal</span>
                  </div>

                   {/* rating */}
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span>★</span>
                    <span className="text-gray-300">{item.rating}</span>
                  </div>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkoutLibrary;