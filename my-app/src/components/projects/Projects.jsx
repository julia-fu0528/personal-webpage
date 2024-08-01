import React from 'react'
import './projects.css'
import Content from './Content'

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            {/* <span className="section__subtitle">Brown Interactive 3D Vision & Learning Lab</span> */}


            <div className="projects__container container grid">
                <Content />
            </div>
        </section>
    )
}
export default Projects;