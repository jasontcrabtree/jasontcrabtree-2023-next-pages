import { getAllPosts } from "@/lib/actions";
import Link from "next/link";

export const metadata = {
    title: 'Posts | Mark I',
};

const App = async () => {
    const posts = await getAllPosts();

    if (!posts || posts === null || posts.length <= 0) {
        return (
            <div>No Posts</div>
        )
    }

    return (
        <div className="p-12 flex flex-col gap-4 items-center">
            <h1 className="text-emerald-600 font-bold text-4xl">All Posts</h1>
            <div className="flex flex-row flex-wrap gap-4 items-start w-full h-full">
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="bg-gray-900 p-4 rounded-xl flex h-full flex-col flex-3">
                            <div className="flex flex-row gap-4 items-center w-full justify-between">
                                {post.published ? (
                                    <div>Live</div>
                                ) : (
                                    <div>Not live</div>
                                )}
                                <span>
                                    {post.date && post.date}
                                </span>
                            </div>
                            <h2 className="font-bold text-xl">
                                <Link href={`/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p>{post.description}</p>
                            <p>{post.content}</p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default App;