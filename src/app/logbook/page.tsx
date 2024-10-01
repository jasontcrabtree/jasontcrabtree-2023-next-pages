import { getUserLogbookEntries } from "@/lib/actions";
import ClientComponent from "./client-component";
import { redirect } from "next/navigation";
import { LogBookEntry } from "@/lib/types";
import { auth } from "../../../auth";

export const metadata = {
    title: 'Worklog | Mark I',
    description: '',
};

const App = async () => {
    const user = await auth();

    if (!user || !user.user || !user.user.email) {
        redirect("/login");
    }

    const userLogEntries = await getUserLogbookEntries({
        userEmail: user.user.email
    }) as LogBookEntry[];

    return (
        <ClientComponent logbookEntries={userLogEntries} />
    )
}

export default App;