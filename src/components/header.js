import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/vaibhav-gangrade-react-portfolio/images/vaibhav_gangrade.jpg" className="rounded-circle" height="50" width="50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hobbies">Hobbies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/achievements">Achievements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactme">Contact Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/downloadcv">Download CV</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
