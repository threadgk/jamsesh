import { Outlet } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Navigation from './components/Navigation'; 
import "/Users/kaylathreadgill/jamsesh/src/css/Footer.css";
import "/Users/kaylathreadgill/jamsesh/src/css/Navigation.css";
import "/Users/kaylathreadgill/jamsesh/src/css/Header.css";

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
