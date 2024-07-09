import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import About from './components/about/About';

const App = () => {
    return (
        <>
        <Header  />

        <main className='main'>
            <About />
        </main>
        </>
    )
}

export default App