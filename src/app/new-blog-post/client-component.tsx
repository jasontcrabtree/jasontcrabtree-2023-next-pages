'use client';

import { SetStateAction, useState } from "react";
import MdEditor from "../_ui/md-editor";
import { SquareHalfBottom } from "@phosphor-icons/react";
import { useFormState } from "react-dom";
import { createNewBlogPost } from "@/lib/actions";
import { RemoteBlogPost } from "@/lib/types";

export default function ClientComponent() {
    const [blogContents, setBlogContents] = useState<string>("");
    const [halfScreen, setHalfScreen] = useState(false);

    // const initialState: any = {
    //     message: null,
    //     errors: {}
    // }
    // const [state, formAction] = useFormState(createNewBlogPost, initialState)

    const blogPostValues: RemoteBlogPost = {
        title: "First one!",
        description: "This is submitted via API, cross ya fingers",
        date: new Date().toISOString().split('T')[0],
        published: false,
        slug: "first-one",
        content: blogContents
    }

    return (
        <div className="p-4 lg:px-64 flex flex-col gap-3">
            {halfScreen && (
                <div className="bg-gray-700 w-full h-20 rounded-xl overflow-hidden"></div>
            )}

            {/*
               <button
                onClick={async () => {
                const updatedLikes = await incrementLike()
                setLikes(updatedLikes)
                }}>
            */}

            <MdEditor
                heading={"New Post"}
                value={blogContents}
                height={halfScreen ? "30vh" : "calc(100vh - 240px)"}
                handleValue={(newValue: string | undefined) => {
                    setBlogContents(newValue ?? "");
                }}
                additionalControls={
                    <>
                        <button className={`rounded-full p-1 ${halfScreen && "bg-gray-700"}`} onClick={(() => setHalfScreen(!halfScreen))}>
                            <SquareHalfBottom
                                color="white"
                                size={24} />
                        </button>
                        <button className="button px-3" onClick={async () => {
                            const res = await createNewBlogPost(blogPostValues);
                            console.log('res', res);
                        }}>
                            Publish
                        </button>
                    </>
                } />

            {/* <form className="" action={formAction}></form> */}
        </div>
    )
}