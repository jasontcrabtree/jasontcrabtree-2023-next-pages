'use client';
import { PlusCircle } from "@phosphor-icons/react";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const Modal = ({ modalState, handleModalState, label, rows = 12, children }: { modalState: boolean, handleModalState: any, label?: string, rows?: number, children: React.ReactNode }): JSX.Element => {

    return (
        <div className="">
            <button onClick={() => handleModalState(true)} className="text-emerald-700 bg-emerald-700 border-2 px-6 py-1 flex items-center justify-center rounded gap-1 bg-transparent  hover:bg-emerald-900 hover:text-white border-emerald-900 shadow w-fit">
                <PlusCircle size={24} /> Snippet
            </button>

            <Dialog open={modalState} onClose={() => handleModalState(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-2xl bg-gray-950 p-8 shadow-2xl rounded flex flex-col gap-4">
                        {label && (
                            <DialogTitle className="font-bold text-zinc-100">{label}</DialogTitle>
                        )}
                        {children}
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default Modal;