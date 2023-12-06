import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-slate-800">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
