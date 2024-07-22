import React from 'react'
import "./research.css";
import Info from './Info.jsx';

const Research = () => {
    return (
        <section className="research section" id = "research">
            <h2 className="section__title">Research</h2>
            {/* <span className="section__subtitle">Brown Interactive 3D Vision & Learning Lab</span> */}

            <div className="research__container container grid">
                <div className="research__data">
                    <Info />

                    
                </div>
            </div>
        </section>
    )
}

export default Research