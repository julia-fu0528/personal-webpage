import React from 'react';

const Content = () => {
    return (
        <div className="skills__info grid">
            <div className="skills__box">
               
                <div className="skills__description">
                    <li>
                        <span className="list__heading"> Technical Skills: </span>
                        <li className="inner__list"> Expert: Python </li>
                        <li className="inner__list"> Proficient: HTML, CSS </li>
                        <li className="inner__list"> Fluent: Java, C++, Typescript, Javascript, WebGL, OpenGL, React </li>
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