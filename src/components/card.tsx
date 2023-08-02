import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

export default function Card(props: any) {
    const [randomJob, setRandomJob] = useState(0);
    const [currentJobName, setCurrentJobName] = useState("   ");
    const [initialRender, setInitialRender] = useState(true);
    const jobs = useSelector((state: RootState) => state.job.jobs);
    const playerOneJobs = useSelector((state: RootState) => state.job.playerOneJobs);
    const playerOneJobName = useSelector((state: RootState) => state.job.jobNames);
    useEffect(() => {
        initialRender ? setInitialRender(false) : randomizeJob();
    }, [props.randomizeAll]);

    function randomizeJob() {
        let random_number = Math.floor(Math.random() * playerOneJobs.length);
        setRandomJob(playerOneJobs[random_number]);
    }

    useEffect(() => {
        setCurrentJobName(playerOneJobName[randomJob - 1]);
    }, [randomJob]);
    return (
        <div className=" flex-wrap flex flex-grow flex-shrink flex-row  bg-[#333333] bg-opacity-60 mt-3 mb-3 ml-12 mr-12 p-6 rounded-xl shadow-md shadow-slate-400">
            <button
                onClick={randomizeJob}
                className="h-12 pl-3 pr-3 pt-3 pb-3 mt-auto mb-auto shadow-inner bg-gradient-radial bg-opacity-70 from-blue-900 to-blue-500"
            >
                <p className="text-white"> Randomize </p>
            </button>
            <p style={{ flex: 1 }} className=" pl-12 mt-auto mb-auto pr-6 flex-1">
                {props.name}
            </p>
            <div style={{ flex: 1 }}>
                <div style={{ flex: 8, flexDirection: "row" }}>
                    {randomJob != 0 ? (
                        <Image
                            src={`/assets/image/pixelart/${randomJob}.png`}
                            alt="Paladin"
                            height={96}
                            width={96}
                            style={{
                                marginTop: "auto",
                                marginLeft: "auto",
                                marginRight: "auto",
                                maxHeight: 96,
                                maxWidth: 96,
                                aspectRatio: 1,
                            }}
                        />
                    ) : (
                        <Image
                            src={`/assets/image/pixelart/0.png`}
                            alt="Paladin"
                            height={96}
                            width={96}
                            style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                                marginLeft: "auto",
                                marginRight: "auto",
                                maxHeight: 96,
                                maxWidth: 96,
                                aspectRatio: 1,
                            }}
                        />
                    )}
                    <p
                        style={{
                            marginBottom: "12",
                            marginLeft: "auto",
                            marginRight: "auto",
                            maxHeight: 12,
                            maxWidth: 12,
                            maxLines: 1,
                            fontWeight: "bold",
                            minHeight: 12,
                        }}
                    >
                        {currentJobName}
                    </p>
                </div>
            </div>
        </div>
    );
}
