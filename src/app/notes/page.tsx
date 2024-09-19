import { auth } from "../_auth/auth";
import ClientComponent from "./client-component";

export const metadata = {
    title: 'Editor | Mark I',
    description: '',
};

const App = async () => {
    const user = await auth();

    return (
        <ClientComponent user={user} />
    )
}

export default App;