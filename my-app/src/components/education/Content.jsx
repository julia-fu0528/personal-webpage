import React from 'react';

const Content = () => {
    return (
        <div className="education__info grid">
            <div className="education__box">
                <div className="education__topic">
                    <h3 className="education__title"> BROWN UNIVERSITY</h3>
                    <span className="education__subtitle" 
                target="_blank" rel="noreferrer">Providence, RI</span>
                    <span className="education__date"> Sep 2022 - May 2026</span>
                </div>
                <div>
                    <span className="education__subheading">Sc.B. Computer Science; A.B. Mathematics</span>
                </div>
                <div className="education__description">
                    <li>
                        <span className="list__heading"> GPA: </span>
                        4.0 / 4.0
                    </li>
                    <li>
                        <span className="list__heading"> Relevant Coursework (Computer Science): </span>
                        <li className="inner__list"> Learning and Sequential Decision Making </li>
                        <li className="inner__list"> Deep Learning </li>
                        <li className="inner__list"> Computer Vision </li>
                        <li className="inner__list"> Computer Graphics </li>
                        <li className="inner__list"> Computer Networks</li>
                        <li className="inner__list"> Design and Analysis of Algorithms</li>
                        <li className="inner__list"> Introduction to Software Engineering </li>
                        <li className="inner__list"> Introduction to Computer Systems </li>
                        <li className="inner__list"> Accelerated Introductino to Computer Science</li>
                        <li className="inner__list"> Applied Statistics in Python</li>
                        <li className="inner__list"> Individual Independent Study </li>
                    </li>
                    <li>
                        <span className="list__heading"> Relevant Coursework (Mathematics): </span>
                        <li className="inner__list"> Real Analysis</li>
                        <li className="inner__list"> Operations Research: Probabilistic Models </li>
                        <li className="inner__list"> Abstract Algebra</li>
                        <li className="inner__list"> Introduction to Computational Linear Algebra</li>
                        <li className="inner__list"> Honors Linear Algebra</li>
                        <li className="inner__list"> Applied Partial Differential Equations</li>
                        <li className="inner__list"> Honors Multivariable Calculus</li>
                        <li className="inner__list"> Honors Statistical Inference</li>
                        <li className="inner__list"> Applied Ordinary Differential Equations</li>
                    </li>
                    <li>
                        <span className="list__heading"> Other Coursework: </span>
                        <li className="inner__list"> Intermediate Microeconomics (Mathematics) </li>
                        <li className="inner__list"> Intermediate Macroeconomics </li>
                        <li className="inner__list"> The Border / La Frontera</li>
                    </li>
                    <li>
                        <span className="list__heading"> Leadership & Activities: </span>
                        <li className="inner__list activities"> Brown Moli East Asian Dance Company: Co-Secretary Chair; Co-Captain </li>
                        <li className="inner__list2"> Organized members, logistics, and finance for the club, communicate with student activities office and financial supervisors </li>
                        <li className="inner__list2"> Prepare for annual spring show, teach Chinese dances, organize rehearsals, participate in shows on and off campus</li>
                        <li className="inner__list2"> Taught three dance pieces in the past year. </li>
                        <li className="inner__list activities"> Brown IgniteCS: Member </li>
                        <li className="inner__list2">
                            Designed and developed a series of courses related to AI and taught as guest lecturer at Nathanael Greene Middle School 
                        </li>
                        <li className="inner__list2">
                        Designed and developed the coding club on HTML, CSS at the Sophia Academy coding club for 1.5 hours per week
                        </li>
                    </li>
                </div>
            </div>
            <div className="education__box">
            <div className="education__topic">
                    <h3 className="education__title"> SHANGHAI FOREIGN LANGUAGE SCHOOL</h3>
                    <span className="education__subtitle" 
                target="_blank" rel="noreferrer">Shanghai, China</span>
                    <span className="education__date"> Sep 2019 - June 2022</span>
                </div>
                <div>
                    <span className="education__subheading"> High School Diploma</span>
                </div>
                <div className="education__description">
                    <li>
                        <span className="list__heading"> GPA: </span>
                        4.0 / 4.0
                    </li>
                    <li>
                        <span className="list__heading"> Leadership: </span>
                        <li className="inner__list"> President of the Student Deaprtment of Arts and Sports </li>
                        <li className="inner__list"> Vice President of the SFLS Physics Club</li>
                        <li className="inner__list"> Vice President of the SFLS Mathematics Club</li>
                        <li className="inner__list"> Vice President of the SFLS Acadeca Club</li>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Content;