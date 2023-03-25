import React from 'react'
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
// import Services from "./Components/Services/Services"
import Portfolio from "./Components/Portfolio/Portfolio"
// import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
const App = () => (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
    </>
)

export default App;