import Navbar from './Navbar';
import React from "react";
import Hero from './Hero';
import About from './About'
import Skills from './Skills';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Navbar2 from './Navbar2';

function App() {
    return (
        <>
            
            <Navbar/>
            <Navbar2/>
            <Hero/>
            <About/>
            <Skills/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
        
    );
}

export default App;