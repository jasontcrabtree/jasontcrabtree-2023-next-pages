'use client';

import { useState } from 'react';
import Link from "next/link";
import { Cactus, List, X } from "@phosphor-icons/react";

const AppNav = ({ children }: { children: React.ReactNode }): React.ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinkItem = `p-2 flex items-center hover:bg-zinc-800 rounded gap-1`;

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="sm:hidden p-4 pb-0 flex flex-row w-full items-center justify-between">
                <Link className={`${navLinkItem} font-bold uppercase text-emerald-300 `} href="/dashboard">
                    <Cactus size={28} />
                    DASHBOARD
                </Link>
                <button
                    className="p-4 text-emerald-500"
                    onClick={toggleSidebar}
                >
                    <List size={24} />
                </button>
            </div>
            <nav
                className={`p-4 pb-12 gap-4 min-w-[168px] text-emerald-500 flex flex-col fixed left-0 right-0 bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} sm:relative sm:translate-y-0 sm:flex sm:min-h-screen sm:p-4 sm:pl-4 sm:pr-2`}
            >
                <div className='flex flex-row justify-between w-full items-center'>
                    <Link className={`${navLinkItem} font-bold uppercase sm:mb-4 text-emerald-300`} href="/dashboard">
                        <Cactus size={28} />
                        DASHBOARD
                    </Link>
                    <button
                        className="sm:hidden p-4 text-emerald-500"
                        onClick={toggleSidebar}
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col gap-1">
                    <Link href="/logbook" className={`${navLinkItem}`}>
                        ~/Logbook
                    </Link>
                    <Link href="/blog" className={`${navLinkItem}`}>
                        ~/Blog
                    </Link>
                    <div className="pl-3">
                        <Link href="/new-blog-post" className={`button`}>
                            New Post
                        </Link>
                        {/* <Link href="/drafts" className={`${navLinkItem} text-zinc-100 py-1`}>
                            Drafts
                        </Link> */}
                        <Link href="/posts" className={`${navLinkItem} text-zinc-100 py-1`}>
                            Posts
                        </Link>
                    </div>
                    <Link href="/snippets" className={`${navLinkItem}`}>
                        ~/Snippets
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
