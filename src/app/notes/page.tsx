import { getUserNotes } from "@/lib/actions";
import ClientComponent from "./client-component";
import { Note } from "@/lib/types";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Editor | Mark I',
    description: '',
};

const App = async () => {
    const user = await auth();

    if (!user || !user.user || !user.user.email) {
        redirect("/login");
    }

    const notes = await getUserNotes({
        userEmail: user?.user?.email
    }) as Note[];

    return (
        <ClientComponent user={user} notes={notes} />
    )
}

export default App;