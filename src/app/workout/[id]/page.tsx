
import Image from "next/image";

interface Workout {
  id: string | number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number | string;
  caloriesBurned: number | string;
  sets: number | string;
  reps: number | string;
  rating: number | string;
  description: string;
  instructions: string[];
}

async function getWorkout(id: string): Promise<Workout | null> {
  try {
    const res = await fetch(
      `https://api.api-store.workers.dev/api/fitlog/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const workout: Workout = await res.json();
    return workout;

   } catch {
    return null;
  }
}

export default async function WorkoutDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const workout = await getWorkout(resolvedParams.id);

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0f1115] text-white flex items-center justify-center">
        <h2 className="text-2xl font-bold">Workout Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6 md:p-12 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-[#181a20] rounded-3xl border border-gray-800 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl">
        
        {/* left Image */}
        <div className="relative w-full h-[350px] md:h-[480px] bg-[#22252e] rounded-2xl overflow-hidden border border-gray-800">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            priority />
        </div>

        {/* right Details */}

        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white">
              {workout.name}
            </h1>

            {/* description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {workout.description}
            </p>

            {/* Group Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {workout.muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#88e700] text-black font-extrabold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Card List */}
           
            <div className="bg-[#0f1115] rounded-xl p-4 border border-gray-800/80 space-y-3 mt-4">
          
              <div className="flex justify-between items-center text-xs">
               <span className="text-gray-400 uppercase font-semibold">
                  Equipment
               </span>
                <span className="text-white font-bold">
                  {workout.equipment}
               </span>
              </div>

              <div className="flex justify-between items-center text-xs border-t border-gray-800/60 pt-2">
                <span className="text-gray-400 uppercase font-semibold">
                  Difficulty
                </span>
                <span className="text-white font-bold">
                 {workout.difficulty}
                </span>
             </div>

              <div className="flex justify-between items-center text-xs border-t border-gray-800/60 pt-2">
                <span className="text-gray-400 uppercase font-semibold">
                  Sets
               </span>
               <span className="text-white font-bold">
                 {workout.sets}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs border-t border-gray-800/60 pt-2">
                <span className="text-gray-400 uppercase font-semibold">
                  Reps
                </span>
                <span className="text-white font-bold">
                  {workout.reps}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs border-t border-gray-800/60 pt-2">
                <span className="text-gray-400 uppercase font-semibold">
                  Duration
                </span>
                <span className="text-white font-bold">
                 {workout.duration} min
                </span>
              </div>

              <div className="flex justify-between items-center text-xs border-t border-gray-800/60 pt-2">
                <span className="text-gray-400 uppercase font-semibold">
                  Calories Burned
                </span>
                <span className="text-white font-bold">
                  {workout.caloriesBurned} kcal
                </span>
             </div>

              <div className="flex justify-between items-center text-xs border-t border-gray-800/60 pt-2">
                <span className="text-gray-400 uppercase font-semibold">
                  Rating
                </span>
                <span className="text-yellow-400 font-bold">
                  ★ {workout.rating}
                </span>
             </div>

            </div>


            {/* Instructions List */}

            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-extrabold uppercase text-gray-300 tracking-wider">
                INSTRUCTIONS
              </h3>
              <ol className="list-decimal list-inside text-xs text-gray-400 space-y-1.5 leading-normal">
               {workout.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
               ))}
              </ol>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <button className="bg-[#88e700] hover:bg-[#79cb00] text-black font-extrabold text-xs py-3.5 px-4 rounded-xl uppercase tracking-wide transition duration-200 shadow-md">
             + Add to today &apos; s plan
            </button>
            <button className="bg-transparent hover:bg-gray-800 border border-gray-700 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl uppercase tracking-wide transition duration-200">
              ♡ Save for later
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}