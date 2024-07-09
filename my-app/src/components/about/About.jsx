import React from 'react';
import "./about.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__content grid">
                    <Social />  
                    

                    <div className="about__img"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default About