import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import ClientComponent from "./client-component";

export const metadata = {
    title: 'Focus | Mark I',
    description: '',
};

const App = async () => {
    const user = await auth();

    if (!user || !user.user || !user.user.email) {
        redirect("/login");
    }

    return (
        <ClientComponent />
    )
}

export default App;