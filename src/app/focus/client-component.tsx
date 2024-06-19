'use client';

/**
 * Work/study/programming focus tool
 */

import { useState } from "react";

enum FocusType {
    'Study',
}

export default function ClientComponent() {
    // const [focusType, setFocusType] = useState<FocusType>(FocusType.Study);
    const [goalTime, setGoalTime] = useState(60);

    return (
        <div className="p-4 md:px-32 flex flex-col gap-3 items-center h-full">
            <div className="flex flex-row w-full items-center justify-between gap-2">
                <h1 className="text-2xl font-bold">Focus</h1>
                <label htmlFor="goalTime" className="flex flex-row gap-2 w-fit items-center">
                    <span className="font-semibold flex flex-row gap-1">
                        Goal: <span className="text-gray-400 font-normal">(mins)</span>
                    </span>
                    <input type="number" name="goalTime" id="" onChange={e => setGoalTime(parseInt(e.target.value))} className="bg-gray-700 focus:ring-0 w-24" defaultValue={goalTime} step={5} />
                </label>
            </div>

            <div className="w-full flex flex-col items-stretch">
                <h2 className="font-semibold text-lg">
                    Time Split:
                </h2>
                <div className="flex flex-row items-center justify-center text-sm text-center rounded overflow-hidden h-full">
                    <div className="bg-emerald-600 w-[20%] p-1">Retain: 20%</div>
                    <div className="bg-emerald-700 w-[60%] p-1">Grow: 60%</div>
                    <div className="bg-emerald-800 w-[20%] p-1">Revise: 20%</div>
                </div>
            </div>

            <div className="mt-auto mb-auto w-full flex flex-col gap-8">
                <div className="flex flex-row flex-wrap gap-2 items-center font-bold text-4xl w-full justify-between md:text-8xl">
                    <p className="font-normal text-zinc-700">Retain:</p>
                    {goalTime > 0 ? (<p>{Math.ceil(goalTime * 0.2)} mins</p>) : "0 mins"}
                </div>

                <div className="flex flex-row flex-wrap gap-2 items-center font-bold text-4xl w-full justify-between md:text-8xl">
                    <p className="font-normal text-zinc-700">Grow:</p>
                    {goalTime > 0 ? (<p>{Math.ceil(goalTime * 0.6)} mins</p>) : "0 mins"}
                </div>

                <div className="flex flex-row flex-wrap gap-2 items-center font-bold text-4xl w-full justify-between md:text-8xl">
                    <p className="font-normal text-zinc-700">Revise:</p>
                    {goalTime > 0 ? (<p>{Math.ceil(goalTime * 0.2)} mins</p>) : "0 mins"}
                </div>
            </div>
        </div>
    )
}