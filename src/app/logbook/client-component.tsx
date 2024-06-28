'use client';

import { useState } from 'react'
import Modal from '../_ui/modal';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { NewSnippet, Timeblock } from '@/lib/types';
import { Blueprint } from '@phosphor-icons/react';
import { createNewLogbookEntry } from '@/lib/actions';

export default function ClientComponent() {
    let [isOpen, setIsOpen] = useState<boolean>(false)
    const [snippetCode, setSnippetCode] = useState<NewSnippet>({
        label: "",
        body: ""
    });
    const [snippets, setSnippets] = useState<NewSnippet[]>([]);

    return (
        <div className="p-4 md:px-32 flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-rose-600">Logbook</h1>
            <div className="flex flex-col gap-4">
                <label htmlFor="date" className="flex flex-row gap-2 items-start">
                    <span className="w-1/5">
                        Date
                    </span>
                    <input type="date" name="date" id="date" className="
                bg-zinc-950 text-zinc-400 w-4/5" />
                </label>
                <label htmlFor="" className="w-full flex flex-row items-start gap-2">
                    <span className="w-1/5">
                        Log
                    </span>
                    <textarea name="" id="" className="rounded bg-zinc-950 text-zinc-400 p-2 w-4/5" rows={8} defaultValue="New log" />
                </label>
                <div className="w-4/5 ml-auto flex flex-row items-center gap-4 justify-between pl-2">
                    <Modal modalState={isOpen} handleModalState={setIsOpen}>
                        <label htmlFor="snippetLabel" className="flex flex-row items-center gap-2">
                            Label
                            <input value={snippetCode.label}
                                onChange={(e) => setSnippetCode({
                                    ...snippetCode,
                                    label: e.target.value,
                                })}
                                type="snippetLabel" className='bg-indigo-900 w-full shadow-inner outline-none' />
                        </label>
                        <CodeEditor
                            value={snippetCode.body}
                            language="js"
                            placeholder=""
                            onChange={(e) => setSnippetCode({
                                ...snippetCode,
                                body: e.target.value,
                            })}
                            padding={16}
                            style={{
                                minHeight: "360px",
                                borderRadius: "4px",
                                backgroundColor: "#020617",
                                color: "#4ade80",
                                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                            }}
                        />
                        <div className="button">
                            <button onClick={() => {
                                setSnippets([
                                    ...snippets,
                                    snippetCode]
                                )
                                setSnippetCode({
                                    label: "",
                                    body: ""
                                })
                                setIsOpen(!isOpen)
                            }}>Add</button>
                        </div>
                    </Modal>

                    {snippets.length > 0 && (
                        <div className='flex flex-row gap-1 items-center mr-auto text-emerald-700'>
                            {snippets.map((snippet, index) => {
                                if (snippet) {
                                    return (
                                        <div className={`pl-[${index * 8}px] w-fit`}>
                                            <Blueprint size={24} color="#047857" />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )}

                    <button className="button" onClick={() => {
                        createNewLogbookEntry({
                            dashboarduser_id: "4b13acfd-067f-40c5-9960-c6f100d8de69",
                            timeblock: "morning",
                            content: "does this work?"
                        })
                    }}>
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