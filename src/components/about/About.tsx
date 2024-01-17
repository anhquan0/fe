import React from 'react'
import { Social } from './Social'
import { DarkMode } from './DarkMode'
import { AboutHeader } from './AboutHeader'

export const About: React.FC = () => {
    const person = {
        name: 'Le Ngoc Anh Quan',
        img: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/367431448_1025665905115272_6373183847582041865_n.jpg?stp=c368.465.417.417a_dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeE333zGwQJ9qIc6YorsUpcrqJPsIukXbQGok-wi6RdtAfMATMW4P73NH3zpex0ro0sqqvBA-Ihqm7qXxPYhXr3Z&_nc_ohc=kFca1cYHdrQAX8e1Zwb&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAvUxXwazDl-JBVlCZl56m5Hl6CJM2vF35imx_8WMcGxQ&oe=65ABEF93',
    }

    return (
        <section className="about">
            <AboutHeader person={person}></AboutHeader>
            <Social></Social>
            <DarkMode></DarkMode>
        </section>
    )
}