import { useEffect, useState } from "react"; 

const ImageSelector = ({ type, onClose, onSelect }) => {
    const [ images, setImages ] = useState([]); 

    useEffect(() => {
        fetch(`https://jamsesh-server-wcbm.onrender.com/api/${type}`) 
        .then(res => res.json()) 
        .then(data => setImages(data)); 
    }, [type]);  

    return ( 
        <div className="img-modal-overlay" onClick={onClose}> 
            <div className="img-modal" onClick={(e) => e.stopPropagation()}> 
                <h2> Select {type === "avatars" ? "Avatar" : "Banner"} </h2> 

                <div className="img-grid"> 
                    { images.map((img, i) => ( 
                        <img 
                        key={i}
                        src={`https://jamsesh-server-wcbm.onrender.com${img}`} 
                        alt="" 
                        className="img-option" 
                        onClick={()=> onSelect(img)} 
                        /> 
                    ))}
                </div> 

                <button className="close-btn" onClick={onClose}> Cancel </button>
            </div>
        </div>
    ) ; 
} ; 

export default ImageSelector; 