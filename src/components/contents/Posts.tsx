import React from "react";
import { PostsLabelGroup } from "./PostLabelGroup";
import { Post } from "./Post";

export const Posts = () => {
    return (
        <section className="content">
            <ul className="posts">
                <PostsLabelGroup></PostsLabelGroup>
                <Post></Post>
            </ul>
        </section>
    )
}