'use client';

import { useState } from 'react';
import Link from "next/link";
import { Cactus } from "@phosphor-icons/react";

const AppNav = ({ children }: { children: React.ReactNode }): React.ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinkItem = `p-2 flex items-center hover:bg-zinc-800 rounded gap-1`;

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className="sm:hidden p-4 text-emerald-500"
                onClick={toggleSidebar}
            >
                ☰
            </button>
            <nav
                className={`p-4 pl-4 pr-2 min-w-[168px] text-emerald-500 min-h-screen flex flex-col fixed top-0 left-0 bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:relative sm:translate-x-0 sm:flex`}
            >
                <button
                    className="sm:hidden mb-4 text-emerald-500 self-end"
                    onClick={toggleSidebar}
                >
                    ✕
                </button>
                <Link className={`${navLinkItem} font-bold uppercase mb-4 text-emerald-300 `} href="/dashboard">
                    <Cactus size={28} />
                    DASHBOARD
                </Link>
                <div className="flex flex-col gap-1">
                    <Link href="" className={`${navLinkItem}`}>
                        ~/Blog
                    </Link>
                    <div className="pl-3">
                        <Link href="" className={`${navLinkItem} text-zinc-100 py-1 bg-indigo-800 rounded-lg hover:bg-indigo-700`}>
                            New Blog Post
                        </Link>
                        <Link href="" className={`${navLinkItem} text-zinc-100 py-1`}>
                            Drafts
                        </Link>
                        <Link href="" className={`${navLinkItem} text-zinc-100 py-1`}>
                            Posts
                        </Link>
                    </div>
                    <Link href="" className={`${navLinkItem}`}>
                        ~/Snippets
                    </Link>
                    <Link href="" className={`${navLinkItem}`}>
                        ~/Flash Cards
                    </Link>
                    <Link href="" className={`${navLinkItem}`}>
                        ~/Study Notes
                    </Link>
                    <Link href="" className={`${navLinkItem}`}>
                        ~/Cabinet
                    </Link>
                </div>

                <div className="mt-auto">
                    {children}
                </div>
            </nav>
        </>
    );
}

export default AppNav;
