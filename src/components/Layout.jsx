import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <section id="hero"><Hero /></section>
                <section id="about"><About /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
            </main>
            <Footer />
        </>
    )
};

export default Layout;