'use client';

import { useState } from 'react'
import SnippetModal from '../_ui/snippet-modal';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function ClientComponent() {
    let [snippetModalOpen, setSnippetModalOpen] = useState<boolean>(false)
    const [snippetCode, setSnippetCode] = useState<string>("");


    return (
        <div className="p-4 md:px-32 flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-rose-600">Logbook</h1>
            <div className="flex flex-col gap-4">
                <label htmlFor="date" className="flex flex-row gap-2 items-start">
                    <span className="w-1/5">
                        Date
                    </span>
                    <input type="date" name="date" id="date" className="
                bg-zinc-900 text-zinc-400 w-4/5" />
                </label>
                <label htmlFor="" className="w-full flex flex-row items-start gap-2">
                    <span className="w-1/5">
                        Log
                    </span>
                    <textarea name="" id="" className="rounded bg-zinc-900 text-zinc-400 p-2 w-4/5" rows={8}>
                        Add new entry
                    </textarea>
                </label>
                <div className="w-4/5 ml-auto flex flex-row items-center gap-4 justify-between pl-2">

                    <SnippetModal modalState={snippetModalOpen} handleModalState={setSnippetModalOpen}>
                        <label htmlFor="snippetLabel" className="flex flex-row items-center gap-2">
                            Label
                            <input type="snippetLabel" className='bg-indigo-900 w-full shadow-inner outline-none' />
                        </label>
                        <CodeEditor
                            value={snippetCode}
                            language="js"
                            placeholder="Please enter JS code."
                            onChange={(e) => setSnippetCode(e.target.value)}
                            padding={16}
                            style={{
                                minHeight: "360px",
                                borderRadius: "4px",
                                backgroundColor: "#ebeaef",
                                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                            }}
                        />
                        <div className="button">
                            <button onClick={() => setSnippetModalOpen(false)}>Add</button>
                        </div>
                    </SnippetModal>

                    <button className="button">
                        Save
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-2xl font-bold text-rose-600">Entries</h2>
                {new Array(3).fill("").map((item, index) => {
                    return (
                        <div key={index} className="rounded bg-zinc-700 p-4">
                            Logbook entry
                        </div>
                    )
                })}
            </div>
        </div>
    )
}