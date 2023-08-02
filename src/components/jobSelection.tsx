"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/index";
import { addJob, removeJob } from "../store/reducers/jobSlice";

export default function JobSelection() {
    const dispatch = useDispatch();
    const playerJobs = useSelector((state: RootState) => state.job.playerOneJobs);
    const jobs = useSelector((state: RootState) => state.job.jobs);
    const jobNames = useSelector((state: RootState) => state.job.jobNames);

    function onPressJobIcon(role: number) {
        let jobCheck = playerJobs.includes(role);
        if (jobCheck) {
            dispatch(removeJob(role));
        } else {
            dispatch(addJob(role));
        }
    }

    return (
        <section>
            <div className="mt-6  pl-12 pr-12 w-full">
                <p className="text-xl">Select available jobs:</p>
                <div className="flex flex-row flex-wrap">
                    {jobs.map((el, index) => {
                        return (
                            <>
                                {playerJobs.includes(index + 1) ? (
                                    <button
                                        className="hover:cursor-pointer"
                                        onClick={() => {
                                            onPressJobIcon(index + 1);
                                        }}
                                    >
                                        <Image
                                            alt={jobNames[index + 1]}
                                            src={`/assets/image/jobicon/${index + 1}.png`}
                                            width={48}
                                            height={48}
                                            style={{ marginLeft: 1, marginRight: 1, minWidth: 48, minHeight: 48 }}
                                        />
                                    </button>
                                ) : (
                                    <button
                                        className="hover:cursor-pointer"
                                        onClick={() => {
                                            onPressJobIcon(index + 1);
                                        }}
                                    >
                                        <Image
                                            alt={jobNames[index + 1]}
                                            src={`/assets/image/jobicon/${index + 1}.png`}
                                            width={48}
                                            height={48}
                                            style={{
                                                marginLeft: 1,
                                                marginRight: 1,
                                                minHeight: 48,
                                                minWidth: 48,
                                                filter: "grayscale(100%)",
                                            }}
                                        />
                                    </button>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
