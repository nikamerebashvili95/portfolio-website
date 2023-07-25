import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
