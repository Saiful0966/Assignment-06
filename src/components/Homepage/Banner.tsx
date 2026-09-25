

import React from 'react';
import Image from 'next/image';
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="w-full bg-[#0f1115] px-6 py-6">
      <div className="w-full bg-[#14161c] rounded-2xl border border-gray-800/60 p-8 md:p-12 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* left text */}

        <div className="flex-1 space-y-6 text-left">
          <span className="text-[#88e700] text-xs font-bold tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight">
            TRAIN WITH INTENT. <br /> LOG EVERY SET.
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today &apos; s plan, and watch the week  &apos; s work add up.
          </p>

          <div>
            <button className="btn bg-[#88e700] text-black font-bold border-none hover:bg-[#72c200] rounded-lg px-8 uppercase text-xs cursor-pointer">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        {/* right image */}

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <Image src={bannerImg} alt="Gym image" width={500} height={500} priority className="w-full h-auto object-contain"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;