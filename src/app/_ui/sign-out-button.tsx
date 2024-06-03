'use client';

import { signOut } from "../_auth/auth";

export async function SignOutButton() {
    // return (
    //     <form
    //         action={async () => {
    //             'use server';
    //             console.log("signing out")
    //             await signOut();
    //         }}
    //     >
    //         <button className='p-2 px-4 rounded-lg flex items-center w-full justify-center font-medium border border-rose-500 text-rose-500 hover:border-rose-700 hover:text-rose-700' type="submit">Sign Out</button>
    //     </form>
    // );
    const handleSignOut = async () => {
        // @ts-ignore
        await signOut({ callbackUrl: '/login' });
    };

    return (
        <button
            onClick={handleSignOut}
            className='p-2 px-4 rounded-lg flex items-center w-full justify-center font-medium border border-rose-500 text-rose-500 hover:border-rose-700 hover:text-rose-700'
        >
            Sign Out
        </button>
    );
}
