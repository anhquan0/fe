import React from "react";

export const Post: React.FC = () => {
    return (
        <li>
            <a href="https://truongnh.dev/gcp/2023/07/11/workload-identiy-provider.html" className="post-link">
                <h2 className="post-title">Workload Identity Federation for Github Provider</h2>
            </a>
            <div className="post-meta">
                <div className="post-date">
                    <div>
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div>
                        <span>Jul 11, 2023</span>
                    </div>
                </div>
                <ul className="post-categories">
                    <li>GCP</li>
                </ul>
            </div>
            <div className="post">
                Assume we want to deploy a CloudRun service to a GCP project from GitHub Action. GitHub needs to be authorized with GCP. We can generate the JSON key of a service account (that has sufficient IAM roles) and store it in the Github Repo as Secrets. Then we use this Service Account key to call GCP APIs. ⇒ It’s hazardous (in case that key is leaked).
            </div>
        </li>
    )
}