import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';
import About from '../components/About/About';
import HomeNav from '../components/Home/Home';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contacts from '../components/Contacts/Contacts';

function Home() {
    
    const [isOpen, setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HomeNav />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  )
}

export default Home