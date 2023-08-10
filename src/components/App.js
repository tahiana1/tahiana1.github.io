import "../styles/App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <div className='App'>
      <Navbar switchDisabled />
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
