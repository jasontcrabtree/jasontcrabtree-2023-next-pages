import { redirect } from "next/navigation";
import ClientComponent from "./client-component";
import { auth } from "../../../auth";

export const metadata = {
    title: 'Editor | Mark I',
    description: '',
};

const App = async () => {
    const user = await auth();

    if (!user || !user.user || !user.user.email) {
        redirect("/login");
    }
    return (
        <ClientComponent user={user} />
    )
}

export default App;