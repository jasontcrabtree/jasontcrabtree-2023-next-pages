import { auth } from "../_auth/auth";
import ClientComponent from "./client-component";

export const metadata = {
    title: 'Focus | Mark I',
    description: '',
};

const App = async () => {
    return (
        <ClientComponent />
    )
}

export default App;