import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { About } from './components/About'
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
