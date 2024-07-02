'use client';

import { useContext, useState } from 'react'
import Modal from '../_ui/modal';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { NewLogBookEntry, NewSnippet } from '@/lib/types';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { Blueprint } from '@phosphor-icons/react';
import { createNewLogbookEntry, createNewSnippets } from '@/lib/actions';
import { AuthContext } from '../_ui/auth-context';

const timeblocks = ['morning', 'afternoon', 'evening']

export default function ClientComponent() {
    const auth = useContext(AuthContext);
    const userEmail = auth?.user?.email;

    let [isOpen, setIsOpen] = useState<boolean>(false)

    const [logbookEntry, setLogbookEntry] = useState<NewLogBookEntry>({
        email: userEmail,
        date: "",
        content: "",
        timeblock: 'morning'
    })

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
                bg-zinc-950 text-zinc-400 w-4/5" value={logbookEntry.date}
                        onChange={(e) => setLogbookEntry({
                            ...logbookEntry,
                            date: e.target.value,
                        })} />
                </label>

                <RadioGroup value={logbookEntry.timeblock} onChange={(event) => {
                    setLogbookEntry({
                        ...logbookEntry,
                        timeblock: event,
                    })
                }} aria-label="Timeblock" className="flex flex-row items-center gap-4 w-full">
                    {timeblocks.map((block: any) => (
                        <Field key={block} className="flex items-center gap-2 py-2">
                            <Radio
                                value={block}
                                className="group flex size-5 items-center justify-center rounded-full border bg-zinc-950 data-[checked]:bg-emerald-400"
                            >
                                <span className="invisible size-2 rounded-full bg-zinc-950 group-data-[checked]:visible" />
                            </Radio>
                            <Label>
                                {block.slice(0, 1).toUpperCase() + block.slice(1)}
                            </Label>
                        </Field>
                    ))}
                </RadioGroup>

                <label htmlFor="logbookEntry" className="w-full flex flex-row items-start gap-2">
                    <span className="w-1/5">
                        Entry
                    </span>
                    <textarea name="logbookEntry" className="rounded bg-zinc-950 text-zinc-400 p-2 w-4/5" rows={8} placeholder="New entry" onChange={(e) => setLogbookEntry({
                        ...logbookEntry,
                        content: e.target.value,
                    })} />
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
                        <button className="button" disabled={!snippetCode.body || !snippetCode.label} onClick={() => {
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
                    </Modal>
                    {snippets.length > 0 && (
                        <div className='flex flex-row gap-1 items-center mr-auto text-emerald-700'>
                            {snippets.map((snippet, index) => {
                                if (snippet) {
                                    return (
                                        <div className={`pl-[${index * 8}px] w-fit`} key={index}>
                                            <Blueprint size={24} color="#047857" />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )}

                    <button className="button" onClick={async () => {
                        const apiRes = await createNewLogbookEntry(logbookEntry)
                        if (apiRes) {
                            const snippetsRes = await createNewSnippets({
                                email: userEmail,
                                snippets: snippets
                            })
                            console.log('snippetsRes', snippetsRes);

                            // const newSnippets = snippets.map((snippetData) => {
                            // })
                            // Promise.all(snippets).then

                        }
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