import React from "react";
import { PostTitleProps } from "../../types/contents/PostType";

export const PostTitle : React.FC<PostTitleProps> = ({link, title}) => {
    return (
        <a href={link} className="post-link">
            <h2 className="post-title">{title}</h2>
        </a>
    )
}