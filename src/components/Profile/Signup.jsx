import { useState } from "react";

const Signup = ({ setLoggedUser }) => {
    const [form, setForm] = useState({
        username: "", 
        password: "",
        avatar: "", 
        banner: "", 
        bio: "", 
        location: "", 
        favoriteArtist: ""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://jamsesh-server-wcbm.onrender.com/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert("Account created!");
                setLoggedUser(data.user);
            }
        })
        .catch(err => console.error(err));
    };

    return (
        <div className="auth-container">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <input name="avatar" placeholder="Avatar URL" onChange={handleChange} />
                <input name="banner" placeholder="Banner URL" onChange={handleChange} />
                <input name="bio" placeholder="Bio" onChange={handleChange} />
                <input name="location" placeholder="Location" onChange={handleChange} />
                <input name="favoriteArtist" placeholder="Favorite Artist" onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
