import React from 'react';

const Content = () => {
    return (
        <div className="skills__info grid">
            <div className="skills__box">
               
                <div className="skills__description">
                    <li>
                        <span className="list__heading"> Awards: </span>
                        <li className="inner__list">
                        <a href="https://sites.google.com/lehigh.edu/pathways-rss2025/fellows?authuser=0"
                            target="_blank" rel="noreferrer">
                            Pathways@RSS
                        </a> 2025 Fellowship Award
                        <span className="emphasize"> (acceptance 8%)</span>
                        </li>
                        <li className="inner__list"> CVPR 2025 Travel Support Award </li>
                        <li className="inner__list"> ICRA 2025 Undergrad Outreach Workshop </li>
                        <li className="inner__list"> Randy Pausch Undergraduate Research Fellowship Reward </li>(<span className="emphasis">1 recipient/yr</span>)
                        <li className="inner__list"> First Place Award at 10th Annual Brown CS Research Symposium </li>
                        <li className="inner__list"> Advanced Undergraduate Research SPRINT Fellowship </li>
                    </li>
                    <li>
                        <span className="list__heading"> Technical Skills: </span>
                        <li className="inner__list"> Expert: Python </li>
                        <li className="inner__list"> Proficient: HTML, CSS </li>
                        <li className="inner__list"> Fluent: Golang, Java, C++, Typescript, Javascript, WebGL, OpenGL, React </li>
                        <li className="inner__list"> Prior Experience: C, Pyret, Racket </li>
                    </li>
                    <li>
                        <span className="list__heading"> Language: </span>
                        <li className="inner__list"> Trilingual proficiency in English, Spanish (Awarded C1 by El Instituto Cervantes), Chinese </li>
                    </li>
                    <li>
                        <span className="list__heading"> Interests: </span>
                        <li className="inner__list skills">  Semi-professional Chinese traditional dance, piano, taekwondo, novel writing, painting, drums, guitar, and tennis </li>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Content;