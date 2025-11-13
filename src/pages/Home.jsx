import "../css/Home.css"
import Contact from "../components/Home/Contact.jsx";
import Slideshow from "../components/Home/Slideshow.jsx"; 


const Home = () => {
    return (
        <section className="home-page">
            <h1>Welcome to Jamsesh</h1>
            <p> Hey there! Welcome to my corner of the internet! JamSesh is an online blog/journal where I intend to share my love for music! Feel free to browse around!</p>
            <Contact />
            <Slideshow />
        </section>
    );
};

export default Home;