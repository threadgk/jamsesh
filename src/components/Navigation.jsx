import {Link} from 'react-router-dom';
import { useState } from 'react';
import "./../css/Navigation.css";

const Navigation = () => { 
    const [menuOpen, setMenuOpen] = useState(false);
    const [downArrow, setDownArrow] = useState(true);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setDownArrow(!downArrow);
    };

  return (
    <nav id="main-nav"> 
        <a onClick={toggleMenu} id="toggle-nav" href="#!">
            {downArrow?( <p>&darr;</p>):(<p>&uarr;</p>)}
        </a>
        <ul className={menuOpen?"":"hide-small"}>
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