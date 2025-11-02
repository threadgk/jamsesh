import "./../css/Contact.css";
const Contact = () => {
    return (
        <div className="contact-form">
            
            <form action="https://api.web3forms.com/submit" method="POST">
            <h2>Contact Me</h2>    
                        <input type="hidden" name="access_key" value="8ee460eb-44d5-45f5-a2a8-dbf93077078f"/>
                        <label className="label" for="name">Name :</label>
                        <input type="text" name="name" required/>

                        <label className="label" for="email">Email :</label>
                        <input type="email" name="email" required/>

                        <label className="label" for="message">Message :</label>
                        <textarea name="message" required></textarea>
    
                        <button id="submit" type="submit">Submit Form</button>
                        <span id="popup" class="hidden"> submission successful! </span>

                </form>
            </div>  
    );
};

export default Contact;