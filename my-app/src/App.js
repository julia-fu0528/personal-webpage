import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import About from './components/about/About';
import Research from './components/research/Research';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';

const App = () => {
    return (
        <>
        <Header  />

        <main className='main'>
            <About />
            <Research />
            <Experience />
            <Projects />
        </main>
        </>
    )
}

export default App