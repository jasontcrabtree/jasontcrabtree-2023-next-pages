"use client";

import { createContext } from "react";
import { Session } from "next-auth";

export const AuthContext = createContext<Session | null>(null);

const AuthProvider = ({ children, session }: {
    children: React.ReactNode;
    session: Session | null;
}) => {
    return (
        <AuthContext.Provider value={session}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;