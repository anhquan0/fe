import React from "react";
import { PostMetaProps } from "../../types/contents/PostType";

export const PostMeta: React.FC<PostMetaProps> = ({date, categories}) => {
    return (
        <div className="post-meta">
            <div className="post-date">
                <div>
                    <i className="fa-solid fa-calendar-days"></i>
                </div>
                <div>
                    <span>{date}</span>
                </div>
            </div>
            <ul className="post-categories">
                {
                    categories.map(c => (
                        <li>{c}</li>
                    ))
                }
            </ul>
        </div>
    )
}