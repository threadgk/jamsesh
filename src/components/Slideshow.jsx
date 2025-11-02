import "./../css/Slideshow.css";
import { useState } from "react";

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };
const images = importAll(
    require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
);
    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
        return (
        <section className="slideshow">
            <img src={images[slideIndex]} /> 
            <a className="prev" onClick={prevSlide} href="#prev">&#10094;</a>
            <a className="next" onClick={nextSlide} href="#next">&#10095;</a>
        </section>
    );
} 

export default Slideshow;