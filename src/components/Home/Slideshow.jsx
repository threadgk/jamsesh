import "../../css/Slideshow.css";
import { useState } from "react";

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);  
    const [showModal, setShowModal] = useState(false);


    const importAll = (resource) => {
        return resource.keys().map(resource);
    };
const images = importAll(
    require.context("/Users/kaylathreadgill/jamsesh/public/images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
);
    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
        return (
    <div id="slideshow-container">
        <h1>Page Preview</h1>

        <section className="slideshow">
            <img src={images[slideIndex]} 
            alt = "Slideshow"
            className = "slideshow-image" 
            onClick = {() => setShowModal(true)}        
            /> 
            <a className="prev" onClick={prevSlide} href="#prev">&#10094;</a>
            <a className="next" onClick={nextSlide} href="#next">&#10095;</a>
        </section> 

        {showModal && (
            <div className="modal" onClick = {() => setShowModal(false)}>
                <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                <img className="modal-content" src={images[slideIndex]} alt="Enlarged Slideshow" onClick = {(e) => e.stopPropagation()}/>
                <div className="modal-caption">{`Image ${slideIndex + 1} of ${images.length}`}</div>
            </div>
        )}
    </div>
    );
} 

export default Slideshow;