import { getUserNotes } from "@/lib/actions";
import { auth } from "../_auth/auth";
import ClientComponent from "./client-component";
import { Note } from "@/lib/types";

export const metadata = {
    title: 'Editor | Mark I',
    description: '',
};

const App = async () => {
    const user = await auth();

    if (!user || !user.user || !user.user.email) {
        return <div>Error no user found</div>
    }

    const notes = await getUserNotes({
        userEmail: user?.user?.email
    }) as Note[];

    return (
        <ClientComponent user={user} notes={notes} />
    )
}

export default App;