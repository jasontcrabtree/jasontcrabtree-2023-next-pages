'use client';

import { useState } from "react";
import MdEditor from "../_ui/md-editor";
import { SquareHalfBottom } from "@phosphor-icons/react";
import { createNewBlogPost } from "@/lib/actions";
import { NewRemoteBlogPost } from "@/lib/types";
import { Session } from "next-auth";
import { Switch } from '@headlessui/react'

export default function ClientComponent({ user }: { user: Session | null }) {
    const [halfScreen, setHalfScreen] = useState(false);
    const [title, setTitle] = useState<string | undefined>("");
    const [description, setDescription] = useState<string | undefined>("");
    const [slug, setSlug] = useState<string>("");
    const [blogContents, setBlogContents] = useState<string>("");
    const [publish, setPublish] = useState(false);

    const blogPostValues: NewRemoteBlogPost = {
        date: new Date().toISOString().split('T')[0],
        title: title || "",
        description: description || "",
        published: publish,
        slug,
        content: blogContents
    }

    return (
        <div className="p-4 lg:px-64 flex flex-col gap-3">
            {halfScreen && (
                <div className="bg-gray-700 w-full h-20 rounded-xl overflow-hidden"></div>
            )}

            <label htmlFor="title" className="flex flex-row items-center gap-1">
                Title
                <input className="bg-zinc-950" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>

            <label htmlFor="slug" className="flex flex-row items-center gap-1">
                Slug
                <input className="bg-zinc-950" type="text" onChange={(e) => setSlug(e.target.value)} value={slug} />
            </label>

            <label htmlFor="description" className="flex flex-row items-center gap-1">
                Description
                <input className="bg-zinc-950" type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </label>

            <MdEditor
                heading={"New Post"}
                value={blogContents}
                height={halfScreen ? "30vh" : "calc(100vh - 240px)"}
                handleValue={(newValue: string | undefined) => {
                    setBlogContents(newValue ?? "");
                }}
                additionalControls={
                    <div className="flex flex-row gap-2 flex-1">
                        <button className={`rounded-full p-1 ${halfScreen && "bg-gray-700"}`} onClick={(() => setHalfScreen(!halfScreen))}>
                            <SquareHalfBottom
                                color="white"
                                size={24} />
                        </button>

                        <div className="flex flex-row gap-2 items-center ml-auto">
                            <Switch
                                checked={publish}
                                onChange={setPublish}
                                className="group inline-flex h-6 w-11 items-center rounded-full bg-zinc-600 transition data-[checked]:bg-emerald-600"
                            >
                                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                            </Switch>
                            <button className="button px-3" onClick={async () => {
                                await createNewBlogPost(blogPostValues);
                            }}>
                                Publish
                            </button>
                        </div>
                    </div>
                } />
        </div>
    )
}