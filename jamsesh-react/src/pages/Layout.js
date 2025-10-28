import { Outlet, Link } from 'react-router-dom';
import './styles/Layout.css';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <>
        <Header />
            <nav>
              <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/artists">Artists</Link>
                </li>
                <li>
                    <Link to="/genres">Genres</Link>
                </li>
                <li>
                    <Link to="/trending">Trending</Link>
                </li> 
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
