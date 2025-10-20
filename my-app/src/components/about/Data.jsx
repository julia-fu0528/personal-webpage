import React from "react";
import CV from "../../assets/CV_Wanjia_Fu.pdf";

const Data = () => {
    return (
        <div className="about__data">
            <h1 className="about__title"> Wanjia Fu
            </h1>
            <h3 className="about__subtitle"> wanjia_fu@brown.edu</h3>
            <p className="about__description">
                I am an undergraduate student at <a href="https://www.brown.edu/" target="_blank" rel="noreferrer" className="is__link">
                     Brown University 
                </a> studying Computer Science and Applied Mathematics, and a researcher in <a href="http://irl.cs.brown.edu/index.php" target="_blank" rel="noreferrer" className="is__link">
                        Brown Intelligent Robotics
                    </a> and <a href="https://ivl.cs.brown.edu/" target="_blank" rel="noreferrer" className="is__link">
                    Brown Interactive 3D Vision & Learning Lab</a>. 
            </p>
            <p className="about__description">
            I'm interested in vision and tactile sensing for contact-rich dexterous manipulation, 
            dynamic models for robot learning, and human robot interactions.
            </p>
            <p className="about__description">
                Outside of STEM, I love dancing and playing the drums. 
            </p>
            <p className="about__description">
                If you'd like to chat, feel free to reach out to me through email!
            </p>
            <p className="phd">
                I am currently looking for PhD positions for Fall 2026.
            </p>
            <a download="" href={CV} className="button
                    button--flex">Download CV
                         <svg
                            class="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M14 2H6C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V8L14 2Z" />
                            <polyline points="14 2 14 8 19 8" />
                            <line x1="9" y1="15" x2="15" y2="15" />
                            <line x1="9" y1="19" x2="15" y2="19" />
                            <polyline points="9 11 9 11.01" />
                            <polyline points="13 11 15 11" />
                    </svg>
                </a>
        </div>
    )
}

export default Data;