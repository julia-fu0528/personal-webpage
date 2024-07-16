import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import About from './components/about/About';
import Research from './components/research/Research';

const App = () => {
    return (
        <>
        <Header  />

        <main className='main'>
            <About />
            <Research />
        </main>
        </>
    )
}

export default App