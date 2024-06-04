'use client';
import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { TextAa } from "@phosphor-icons/react";

/**
 * MDEditor docs
 * https://uiwjs.github.io/react-md-editor/#props
 */
const MdEditor = ({
    heading, value, additionalControls, height, handleValue
}: {
    heading: string,
    value: string,
    height: string,
    additionalControls: React.ReactElement,
    handleValue: any
}) => {
    const [hideToolBar, setHideToolbar] = useState(true);

    return (
        <div data-color-mode="dark">
            <div className="flex ml-auto w-full flex-row justify-between items-center gap-4 pb-3">
                <h1 className="text-xl font-bold">
                    {heading}
                </h1>

                <div className="flex flex-row gap-4 items-center">
                    <button className="" onClick={(() => setHideToolbar(!hideToolBar))}>
                        <TextAa size={24} />
                    </button>
                    {additionalControls}
                    <button className="button px-3">
                        Publish
                    </button>
                </div>
            </div>

            <MDEditor
                className=""
                enableScroll={true}
                height={height}
                hideToolbar={hideToolBar}
                preview="edit"
                value={value}
                onChange={handleValue}
            />
        </div>
    );
};

export default MdEditor;