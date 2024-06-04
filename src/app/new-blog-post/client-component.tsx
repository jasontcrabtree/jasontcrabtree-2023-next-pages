'use client';

import { SetStateAction, useState } from "react";
import MdEditor from "../_ui/md-editor";
import { SquareHalfBottom } from "@phosphor-icons/react";

export default function ClientComponent() {
    const [value, setValue] = useState("**Hello world!!!**");
    const [halfScreen, setHalfScreen] = useState(true);

    return (
        <div className="p-4 lg:px-64 flex flex-col gap-3">

            <p>{value}</p>

            {halfScreen && (
                <div className="bg-gray-700 w-full h-20 rounded-xl overflow-hidden"></div>
            )}

            <MdEditor
                heading={"New Post"}
                value={value}
                height={halfScreen ? "30vh" : "calc(100vh - 200px)"}
                handleValue={
                    ((newValue: SetStateAction<string>) => { setValue(newValue) })
                }
                additionalControls={
                    <button className="" onClick={(() => setHalfScreen(!halfScreen))}>
                        <SquareHalfBottom size={24} />
                    </button>
                } />
        </div>
    )
}