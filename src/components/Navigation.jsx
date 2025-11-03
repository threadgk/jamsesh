import { Link } from "react-router-dom";
import { useState } from "react";
import "./../css/Navigation.css";

const Navigation = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="main-nav"> 
      {/* Toggle Button */}
      <button id="toggle-nav" onClick={toggleMenu} className="toggle-btn">
        {menuOpen ? "[menu ▲]" : "[menu ▼]"}
      </button>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links hidden"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/artists">Artists</Link></li>
        <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
