import React from "react";
import { AboutHeaderProps } from "../../types/about/AboutType";

export const AboutHeader: React.FC<AboutHeaderProps> = (props) => {
    const {img, name} = props.person

    return (
        <div className="about-header">
            <div className='about-title' >
                <a href="/">
                    <img src={img} alt={"The avatar image of " +  name}/>
                </a>
                <h2 id='title'>
                    <a href="/">{name}</a>
                </h2>
            </div>
            <p className='tagline'>Fullstack Developer</p>
        </div>
    )
}