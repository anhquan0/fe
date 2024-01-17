import React from "react";

export const PostsLabelGroup = () => {
    return (
        <li className="posts-labelgroup" id="posts-labelgroup">
            <h1 id="posts-label" style={{width: '50px'}}>POSTS</h1>
            <div className="search-container">
                <div className="search-section">
                    <i className="fas fa-search"></i>
                    <input type="text" name="search" id="searchbar" autoComplete="off" aria-label="search in posts"></input>
                    <div className="search-results" id="search-results" data-placeholder="No Results" style={{display: "none"}}>
                        {/* <a href='https://truongnh.dev/linux/networking/tutorials/2018/10/29/setting-up-after-install-docker.html' target="_blank">Các bước sau khi cài đặt Docker trên hệ thống Linux</a> */}
                    </div>
                </div>
            </div>
        </li>
    )
}