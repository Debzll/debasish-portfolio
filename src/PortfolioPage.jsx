import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LetMe from './components/LetMe';
import Footer from './components/Footer';
import LiquidGlassBackground from './components/LiquidGlassBackground';

const PortfolioPage = () => {
  const [theme, setTheme] = useState('light');

  // Projects with updated Portfolio Website link only
  const projects = [
    { 
      title: 'Plant Disease Detection', 
      link: 'https://drive.google.com/drive/folders/1njKCJHdPrl4tsq7wV-rppQIsBr7rLqrK?usp=sharing', 
      description: 'ML project detecting diseases in plants from images.' 
    },
    { 
      title: 'Portfolio Website', 
      link: 'https://drive.google.com/drive/folders/1hWJj0rLv7jFnXaAV6EgCBO591B0tNtnw?usp=sharing', 
      description: 'Personal website built with React.' 
    }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <main style={{ padding: '1rem' }}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      {/* Wrap Hero with LiquidGlassBackground */}
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <LiquidGlassBackground />
        <Hero />
      </div>

      <About />
      <Skills />
      <Projects projects={projects} />
      <LetMe />
      <Footer />
    </main>
  );
};

export default PortfolioPage;
