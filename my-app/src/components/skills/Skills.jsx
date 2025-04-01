import React from 'react'
import './skills.css'
import Content from './Content'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Awards/Skills</h2>
            {/* <span className="section__subtitle">Brown Interactive 3D Vision & Learning Lab</span> */}
            <div className="skills__container container grid">
                <Content />
            </div>
        </section>
    )
}
export default Skills;