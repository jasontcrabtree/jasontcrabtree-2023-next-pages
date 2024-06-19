'use client';

import { Plus, PlusCircle } from "@phosphor-icons/react";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function ClientComponent() {
    let [isOpen, setIsOpen] = useState(false)

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
                    <button onClick={() => setIsOpen(true)}>Open dialog</button>
                    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                                <DialogTitle className="font-bold">Deactivate account</DialogTitle>
                                <Description>This will permanently deactivate your account</Description>
                                <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                                <div className="flex gap-4">
                                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                                    <button onClick={() => setIsOpen(false)}>Deactivate</button>
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                    <button className=" bg-emerald-700 border px-6 py-1 flex items-center justify-center rounded gap-1 text-zinc-100  hover:bg-emerald-900 border-emerald-900 shadow w-fit">
                        <PlusCircle size={24} /> Snippet
                    </button>
                    <button className="button">
                        Save
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-2xl font-bold text-rose-600">Entries</h2>
                {new Array(12).fill("").map((item, index) => {
                    console.log('item', item);
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