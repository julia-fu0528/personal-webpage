import React from 'react'
import './experience.css'
import Content from './Content'

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <h2 className="section__title">Experience</h2>
            {/* <span className="section__subtitle">Brown Interactive 3D Vision & Learning Lab</span> */}


            <div className="experience__container container grid">
                <Content />
            </div>
        </section>
    )
}
export default Experience;