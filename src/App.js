import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { About } from './components/About'
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
