import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Aboutme from './components/aboutme';
import Hobbies from './components/hobbies';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Achievements from './components/achievements';
import Contactme from './components/contactme';
import DownloadCV from './components/downloadcv';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/vaibhav-gangrade-react-portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contactme" element={<Contactme />} />
          <Route path="/downloadcv" element={<DownloadCV />} />
          {/* Additional routes as needed */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
