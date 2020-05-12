import React from 'react';
import Header from "./domComponents/Header";
import Navigation from "./domComponents/Navigation";
import Projects from "./domComponents/Projects";
import Timeline from "./domComponents/Timeline";
import Skills from "./domComponents/Skills";
import Contact from "./domComponents/Contact";

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header id={'about'}></Header>
            <Timeline ></Timeline>
            <Skills></Skills>
            <Projects id={'projects'}></Projects>
            <Contact id={'contact'}></Contact>
        </div>
    );
};

export default About;