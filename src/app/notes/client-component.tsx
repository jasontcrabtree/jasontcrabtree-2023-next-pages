'use client';

import { useState } from "react";
import { saveNote } from "@/lib/actions";
import { NewNote, Note } from "@/lib/types";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

export default function ClientComponent({ user, notes }: {
    user: Session | null
    notes: Note[]
}) {
    if (!user || !user.user || !user.user.email) {
        redirect('/login')
    }

    const [noteBody, setNoteBody] = useState<string>("");

    const noteValues: NewNote & { email: string } = {
        date: new Date().toISOString().split('T')[0],
        note_body: noteBody,
        email: user?.user?.email
    }

    console.log('notes', notes);



    return (
        <div className="p-4 lg:px-64 flex flex-col gap-3">
            <label htmlFor="noteBody" className="flex flex-col items-start gap-2">
                Description
                <textarea className="bg-zinc-950 w-full h-64" name="noteBody" id="noteBody" onChange={(e) => setNoteBody(e.target.value)} value={noteBody}></textarea>
            </label>

            <button className="button px-3" onClick={async () => {
                await saveNote(noteValues);
            }}>
                Save
            </button>

            <hr />

            {notes.map((note) => {
                return (
                    <div key={note.id}>
                        {/* <span className="align-super">
                            {note.date && note.date}
                        </span> */}
                        {/* <span>{note.date && note.date}</span> */}
                        {note.note_body}
                    </div>
                )
            })}
        </div>
    )
}