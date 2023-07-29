import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/contact';
import About from './components/About';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
