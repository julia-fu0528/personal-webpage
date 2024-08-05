import React from 'react'
import './education.css'
import Content from './Content'

const Education = () => {
    return (
        <section className="education section" id="education">
            <h2 className="section__title">Education</h2>
            {/* <span className="section__subtitle">Brown Interactive 3D Vision & Learning Lab</span> */}
            <div className="education__container container grid">
                <Content />
            </div>
        </section>
    )
}
export default Education;