import './App.css';
import './styles/globals.css';

// Import components
import Navbar from './components/layout/Navbar';  
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills/Skills';
import Contact from './components/sections/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* Navigation - Full width */}
      <Navbar />

      {/* Main Content Container - 70% width */}
      <main className="main-container">
        {/* Hero Section - Home */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer - Full width */}
      <Footer />
    </div>
  );
}

export default App;