import "/Users/kaylathreadgill/jamsesh/src/css/Home.css"
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    }); 

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 


        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                access_key: "8ee460eb-44d5-45f5-a2a8-dbf93077078f",
                ...formData
            })
        }); 

        const result = await response.json();
        setIsLoading(false); 
    
        if (response.ok && result.success) {
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                message: ""
            });
            setTimeout(() => setIsSubmitted(false), 5000);
        } else {
            alert("There was an error submitting the form. Please try again.");
        }
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
            <h2 id="header">Contact Form</h2>  
            <p> Fill out the form with any suggestions or feedback you may have for the site.</p>  
                    <label className="label" htmlFor="name">Name :</label>
                    <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} required/>

                    <label className="label" htmlFor="email">Email :</label>
                    <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} required/>

                    <label className="label" htmlFor="message">Message :</label>
                    <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required>
                    </textarea>

                    <button id="submit" type="submit" disabled={isLoading}> 
                        {isLoading ? "Submitting..." : "Submit Form"}
                    </button>

                    {isSubmitted && (
                        <span id="popup" className="popup"> submission successful! </span> 
                        )}
                </form>
            </div>  
    );
};

export default Contact;