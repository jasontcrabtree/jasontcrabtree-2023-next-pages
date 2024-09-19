'use client';

import { useState } from "react";
import { saveNote } from "@/lib/actions";
import { NewNote } from "@/lib/types";
import { Session } from "next-auth";

export default function ClientComponent({ user }: { user: Session | null }) {
    const [noteBody, setNoteBody] = useState<string>("");

    const noteValues: NewNote = {
        date: new Date().toISOString().split('T')[0],
        note_body: noteBody
    }

    return (
        <div className="p-4 lg:px-64 flex flex-col gap-3">
            {noteBody && noteBody}

            <label htmlFor="noteBody" className="flex flex-col items-start gap-2">
                Description
                <textarea className="bg-zinc-950 w-full h-64" name="noteBody" id="noteBody" onChange={(e) => setNoteBody(e.target.value)} value={noteBody}></textarea>
            </label>

            <button className="button px-3" onClick={async () => {
                await saveNote(noteValues);
            }}>
                Save
            </button>
        </div>
    )
}