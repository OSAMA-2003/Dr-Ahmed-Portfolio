import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Research } from './components/Research';
import { Education } from './components/Education';
import { Committees } from './components/Committees';
import { Workshops } from './components/Workshops';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Research />
      <Committees />
      <Workshops />
      <Contact />
    </div>
  );
}

export default App;