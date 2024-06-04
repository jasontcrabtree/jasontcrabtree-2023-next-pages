'use client';

import { useState } from "react";
import MdEditor from "../_ui/md-editor";
import { SquareHalfBottom } from "@phosphor-icons/react";

export default function ClientComponent() {
    const [value, setValue] = useState("**Hello world!!!**");
    const [halfScreen, setHalfScreen] = useState(true);



    return (
        <div className="p-4 lg:px-64 flex flex-col gap-3">
            {halfScreen && (
                <div className="bg-red-500 w-full aspect-video rounded-xl overflow-hidden"></div>
            )}

            <MdEditor
                heading={"New Post Editor"}
                value={value}
                additionalControls={
                    <button className="" onClick={(() => setHalfScreen(!halfScreen))}>
                        <SquareHalfBottom size={24} />
                    </button>
                }
                handleValue={(() => { setValue(value) })} />
        </div>
    )
}