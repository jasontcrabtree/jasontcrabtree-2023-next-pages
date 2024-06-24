'use client';
import { PlusCircle } from "@phosphor-icons/react";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const SnippetModal = ({ modalState, handleModalState, label, rows = 12, children }: { modalState: boolean, handleModalState: any, label?: string, rows?: number, children: React.ReactNode }): JSX.Element => {

    return (
        <div>
            <button onClick={() => handleModalState(true)} className=" bg-emerald-700 border px-6 py-1 flex items-center justify-center rounded gap-1 text-zinc-100  hover:bg-emerald-900 border-emerald-900 shadow w-fit">
                <PlusCircle size={24} /> Snippet
            </button>

            <Dialog open={modalState} onClose={() => handleModalState(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-2xl bg-indigo-950 p-8 shadow-2xl rounded flex flex-col gap-4">
                        {label && (
                            <DialogTitle className="font-bold text-zinc-100">{label}</DialogTitle>
                        )}
                        {/* <label htmlFor="snippet" className="w-full">
                            <textarea name="snippet" id="snippet" className="rounded bg-zinc-900 text-zinc-300 p-2 w-full mono" rows={rows} placeholder="...">
                            </textarea>
                        </label> */}
                        {children}
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default SnippetModal;