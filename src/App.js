import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
