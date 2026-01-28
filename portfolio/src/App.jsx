import React from 'react';
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx';
import Skills from './pages/Skills.jsx';
import NavBar from './pages/NavBar.jsx';

export default function App() {

  return (
    <div>
      <NavBar />
      <About />

      <section id='skills'>
        <Skills />
      </section>

      <section id='experience'>
        <Experience />
      </section>
    </div>
  )
}