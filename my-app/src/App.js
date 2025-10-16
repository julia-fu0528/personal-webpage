import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import About from './components/about/About';
import Research from './components/research/Research';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';

const App = () => {
    return (
        <>
        <Header  />

        <main className='main'>
            <About />
            <Research />
            <Experience />
            <Projects />
            <Skills />
            <Education />
        </main>
        </>
    )
}

export default App