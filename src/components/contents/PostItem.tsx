import React from "react";
import { PostTitle } from "./PostTitle";
import { PostMeta } from "./PostMeta";

export const PostItem: React.FC = () => {
    return (
        <li>
            <PostTitle link={"https://truongnh.dev/gcp/2023/07/11/workload-identiy-provider.html"} title={"Workload Identity Federation for Github Provider"}></PostTitle>
            <PostMeta date="20-10-2022" categories={["GCP", "Cloud"]}></PostMeta>
            <div className="post">
                Assume we want to deploy a CloudRun service to a GCP project from GitHub Action. GitHub needs to be authorized with GCP. We can generate the JSON key of a service account (that has sufficient IAM roles) and store it in the Github Repo as Secrets. Then we use this Service Account key to call GCP APIs. ⇒ It’s hazardous (in case that key is leaked).
            </div>
        </li>
    )
}