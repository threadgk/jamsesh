import { Outlet } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Navigation from './components/Navigation'; 
import "./css/Footer.css";
import "./css/Navigation.css";
import "./css/Header.css";
import "./css/Layout.css";
const Layout = () => {
    return (
        <div id="structure">
            <Header />
            <Navigation />

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;
