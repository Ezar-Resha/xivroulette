"use client";
import Card from "@/src/components/card";
import JobSelection from "@/src/components/jobSelection";
import { useState } from "react";

export default function Home() {
    const [roulette, setRoulette] = useState([
        "Expert",
        "Level 90 Dungeons",
        "Level 50/60/70/80 Dungeons",
        "Leveling",
        "Trial",
        "Main Scenario",
        "Alliance Raids",
        "Normal  Raids",
        "Frontline",
    ]);

    const [randomizeAll, setRandomizeAll] = useState(0);

    function randomAll() {
        randomizeAll == 0 ? setRandomizeAll(1) : setRandomizeAll(0);
    }

    return (
        <main className="flex flex-col items-center pl-12 pr-12 bg-[#1B1B1B] font-mono">
            <div className="flex flex-col z-10 w-full max-w-5xl min-h-screen text-sm lg:flex bg-[#E6E6E6]">
                <div className="z-9 w-full h-12  flex-row-reverse flex">
                    <div className="z-8  mt-auto mb-auto pr-6 text-center text-3xl">XIV Roulettes</div>
                </div>
                <div className="z-10  w-full flex flex-col">
                    <JobSelection />
                    <button
                        onClick={randomAll}
                        className=" h-12 ml-auto mr-auto mb-3 mt-3 shadow-inner w-fit bg-gradient-radial bg-opacity-70 from-blue-900 to-blue-500"
                    >
                        <p className="pl-6 pr-6 pt-2 pb-2  text-white">Randomize All</p>
                    </button>
                    <div>
                        {roulette.map((el, index) => {
                            return <Card name={roulette[index]} randomizeAll={randomizeAll} key={index} />;
                        })}
                    </div>
                </div>
                <div className="w-full flex flex-row-reverse pr-12">
                    <p className="text-slate-400">by Asher Folgraze@Behemoth</p>
                </div>
            </div>
        </main>
    );
}
