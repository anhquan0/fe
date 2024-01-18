import React from "react";
import { PostsLabelGroup } from "./PostLabelGroup";
import { PostItem } from "./PostItem";

export const PostList = () => {
    return (
        <section className="content">
            <ul className="posts">
                <PostsLabelGroup></PostsLabelGroup>
                <PostItem></PostItem>
            </ul>
        </section>
    )
}