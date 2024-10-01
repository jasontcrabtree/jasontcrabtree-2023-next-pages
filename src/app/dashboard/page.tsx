import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export const metadata = {
    title: 'Dashboard | Mark I',
    description: '',
};

const Page = async () => {
    const user = await auth();

    if (!user || !user.user || !user.user.email) {
        redirect("/login");
    }

    return (
        <main className="flex items-center justify-center h-full">
            <h1>
                Hello from app router
            </h1>
        </main>
    )
}

export default Page;